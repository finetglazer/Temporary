# Dockerfile located at BE/account-service/Dockerfile
# --- Build context should be the BE directory ---

FROM maven:3.9-eclipse-temurin-17 AS builder

WORKDIR /build

# Copy the parent POM at the BE level
COPY pom.xml .

# Copy all service directories (including account-service)
COPY account-service/ account-service/
# If you have other modules needed for the build, copy them too
# COPY other-module/ other-module/

# Copy the shared module if it exists
COPY kafka-message-models/ kafka-message-models/

# Build the account-service
RUN mvn -pl account-service -am clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copy the JAR from the builder stage
COPY --from=builder /build/account-service/target/account-service-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8083

ENTRYPOINT ["java", "-jar", "/app/app.jar"]