package org.migor.rich.rss.database.repository

import org.migor.rich.rss.database.model.ExporterTarget
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface ExporterTargetRepository : CrudRepository<ExporterTarget, String> {
  fun findAllByExporterId(id: String): List<ExporterTarget>
}