# Dockerfile located at BE/market-data-service/Dockerfile
# --- Build context MUST BE the parent directory: BE/ ---

# ---------------- Stage 1: Build the application ----------------
# Use a single builder stage
FROM maven:3.9-eclipse-temurin-17 AS builder

# Set the working directory for the build
WORKDIR /build

# Copy the entire project structure (parent POM and all modules)
# The source '.' refers to the build context (BE/)
COPY . .

# Run Maven to build ONLY the market-data-service module and its dependencies (-am includes the parent)
# Maven runs from /build (where the parent pom.xml is)
# -pl specifies the target module relative to the parent pom
RUN mvn -pl market-data-service -am clean package -DskipTests

# ---------------- Stage 2: Create the final runtime image ----------------
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copy the specific JAR from the TARGET module's target directory
# Path is relative to the WORKDIR in the builder stage (/build)
# Assumes artifactId='market-data-service' and version='0.0.1-SNAPSHOT' in market-data-service/pom.xml
COPY --from=builder /build/market-data-service/target/market-data-service-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port the application runs on (must match server.port in application config)
# Based on your docker-compose.yml and gateway config for market-data-service
EXPOSE 8087

# --- Final ENTRYPOINT ---
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
