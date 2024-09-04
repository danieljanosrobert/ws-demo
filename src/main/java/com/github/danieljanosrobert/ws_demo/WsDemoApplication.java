package com.github.danieljanosrobert.ws_demo;

import lombok.extern.log4j.Log4j2;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;

import java.net.InetAddress;
import java.util.Objects;

/**
 * Alkalmazás belépési pontját tartalmazó osztály.
 */
@Log4j2
@SpringBootApplication
public class WsDemoApplication {

	/**
	 * Az alkalmazás futtatására szolgáló metódus.
	 *
	 * @param args cli-ben kapott paraméterek listája
	 */
	public static void main(final String[] args) {
		final Environment env = SpringApplication.run(WsDemoApplication.class, args).getEnvironment();
		final String protocol = Objects.isNull(env.getProperty("server.ssl.key-store")) ? "http" : "https";
		final String hostAddress = getHostAddress();
		final String port = Objects.isNull(env.getProperty("server.port")) ? "8080" : env.getProperty("server.port");
		log.info("""

                ----------------------------------------------------------
                \tApplication '{}' is running! Access URLs:
                \tLocal:\t\t{}://localhost:{}
                \tExternal:\t{}://{}:{}
                \tProfile(s):\t{}
                ----------------------------------------------------------""",
			env.getProperty("spring.application.name"),
			protocol,
			port,
			protocol,
			hostAddress,
			port,
			env.getActiveProfiles());
	}

	private static String getHostAddress() {
		try {
			return InetAddress.getLocalHost().getHostAddress();
		} catch (final Exception exception) {
			log.debug("The host name could not be determined, using `localhost` as fallback");
			return "localhost";
		}
	}
}
