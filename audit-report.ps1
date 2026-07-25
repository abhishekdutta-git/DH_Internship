$report = Get-Content ./lighthouse-report.json | ConvertFrom-Json
Write-Host "Accessibility Score: $($report.categories.accessibility.score * 100)"
$report.audits.PSObject.Properties | ForEach-Object {
  $audit = $_.Value
  if ($audit.score -eq 0) {
    Write-Host "FAIL: $($audit.id) - $($audit.title)"
    if ($audit.details -and $audit.details.items) {
      $audit.details.items | ForEach-Object {
        Write-Host "  - $($_ | ConvertTo-Json -Compress)"
      }
    }
  }
}
