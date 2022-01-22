package org.migor.rich.rss

import org.migor.rich.rss.service.PropertyService
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableScheduling

@SpringBootApplication
@EnableScheduling
@EnableConfigurationProperties(PropertyService::class)
class RichRssApplication

fun main(args: Array<String>) {
  runApplication<RichRssApplication>(*args)
}