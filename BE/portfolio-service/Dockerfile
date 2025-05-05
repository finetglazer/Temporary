# Dockerfile located at BE/portfolio-service/Dockerfile  <-- Assumed location updated
# --- Build context MUST BE the parent directory: BE/ ---

# ---------------- Stage 1: Build the application ----------------
# Use a single builder stage
FROM maven:3.9-eclipse-temurin-17 AS builder

# Set the working directory for the build
WORKDIR /build

# Copy the entire project structure (parent POM and all modules)
# The source '.' refers to the build context (BE/)
COPY . .

# Run Maven to build ONLY the portfolio-service module and its dependencies (-am includes the parent)
# Maven runs from /build (where the parent pom.xml is)
# -pl specifies the target module relative to the parent pom
# *** CHANGED 'trading-service' to 'portfolio-service' below ***
RUN mvn -pl portfolio-service -am clean package -DskipTests

# ---------------- Stage 2: Create the final runtime image ----------------
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copy the specific JAR from the TARGET module's target directory
# Path is relative to the WORKDIR in the builder stage (/build)
# *** CHANGED paths 'trading-service' to 'portfolio-service' below ***
# Assumes artifactId in portfolio-service/pom.xml is 'portfolio-service' and version is '0.0.1-SNAPSHOT'
COPY --from=builder /build/portfolio-service/target/portfolio-service-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port the application runs on.
# IMPORTANT: Ensure this matches the server.port in your application.properties/yml for portfolio-service
EXPOSE 8091

# --- Final ENTRYPOINT ---
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
