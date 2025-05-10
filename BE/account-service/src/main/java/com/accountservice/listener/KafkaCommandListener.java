package com.accountservice.listener;

import com.accountservice.service.kafka.KafkaCommandHandlerService;
import com.project.kafkamessagemodels.model.CommandMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@RequiredArgsConstructor
public class KafkaCommandListener {

    private final KafkaCommandHandlerService commandHandlerService;
    // In BE/account-service/src/main/java/com/accountservice/listener/KafkaCommandListener.java

    @KafkaListener(
            id = "accountOrderCommandsListener",
            topics = "${kafka.topics.account-commands.order-buy}",
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void consumeAccountOrderCommands(@Payload CommandMessage command, Acknowledgment ack) {
        try {
            log.info("Processing order command type: {} for saga: {}", command.getType(), command.getSagaId());

            switch (command.getType()) {
                case "ACCOUNT_VERIFY_STATUS":
                    commandHandlerService.handleVerifyAccountStatus(command);
                    break;
                case "ACCOUNT_RESERVE_FUNDS":
                    commandHandlerService.handleReserveFunds(command);
                    break;
                case "ACCOUNT_RELEASE_FUNDS":
                    commandHandlerService.handleReleaseFunds(command);
                    break;
                case "ACCOUNT_SETTLE_TRANSACTION":  // Add this case
                    commandHandlerService.handleSettleTransaction(command);
                    break;
                case "ACCOUNT_REVERSE_SETTLEMENT":  // Add this for compensation
                    commandHandlerService.handleReverseSettlement(command);
                    break;
                default:
                    log.warn("Unknown account order command type: {}", command.getType());
                    break;
            }

            // Acknowledge the message
            ack.acknowledge();

        } catch (Exception e) {
            log.error("Error processing account order command: {}", e.getMessage(), e);
            // Don't acknowledge - will be retried or sent to DLQ
            throw new RuntimeException("Command processing failed", e);
        }
    }
}
