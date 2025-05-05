
package com.project.userservice.listener;

import com.project.kafkamessagemodels.model.CommandMessage;
import com.project.userservice.service.kafka.KafkaCommandHandlerService;

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

    @KafkaListener(
            id = "userOrderCommandsListener",
            topics = "${kafka.topics.user-commands.order-buy}",
            containerFactory = "orderCommandsListenerFactory"
    )
    public void consumeOrderCommands(@Payload CommandMessage command, Acknowledgment ack) {
        try {
            log.info("Processing order command: {} for saga: {}", command.getType(), command.getSagaId());

            if ("USER_VERIFY_TRADING_PERMISSIONS".equals(command.getType())) {
                commandHandlerService.handleVerifyTradingPermissionCommand(command);
            } else {
                log.warn("Unknown order command type: {}", command.getType());
            }

            ack.acknowledge();
        } catch (Exception e) {
            log.error("Error processing order command: {}", e.getMessage(), e);
            throw new RuntimeException("Command processing failed", e);
        }
    }
}

