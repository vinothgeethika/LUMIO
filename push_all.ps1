Write-Host "=========================================" -ForegroundColor Cyan
Write-Host " LUMIO Studio - Micro-Batch GitHub Push " -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "Batches 1 to 6 are ALREADY LIVE on GitHub!" -ForegroundColor Green
Write-Host "Now uploading remaining files in micro-batches (under 25MB each)...`n" -ForegroundColor Gray

# Ensure optimal postBuffer
git config http.postBuffer 524288000

$micro_commits = @(
    @{ hash = "ce13444"; name = "Part 1/11: Vertical Template 3 (~12MB)" },
    @{ hash = "a6c6e19"; name = "Part 2/11: Vertical Template 4 (~15MB)" },
    @{ hash = "65177d4"; name = "Part 3/11: Vertical Template 7 (~13MB)" },
    @{ hash = "52d1679"; name = "Part 4/11: Vertical Template 8 (~12MB)" },
    @{ hash = "1a9044c"; name = "Part 5/11: Vertical Template 5 (~22MB)" },
    @{ hash = "75742e4"; name = "Part 6/11: Vertical Template 6 (~24MB)" },
    @{ hash = "74890da"; name = "Part 7/11: Vertical Tutorial 1 (~12MB)" },
    @{ hash = "0aa33c6"; name = "Part 8/11: Tutorial Computer 2 (~22MB)" },
    @{ hash = "15bf859"; name = "Part 9/11: Computer Animations (~15MB)" },
    @{ hash = "e4be073"; name = "Part 10/11: Landscape Animations (~15MB)" },
    @{ hash = "a46b51d"; name = "Part 11/11: Final Sync (~1MB)" }
)

foreach ($c in $micro_commits) {
    Write-Host "`n>>> Uploading $($c.name)..." -ForegroundColor Yellow
    git push origin "$($c.hash):refs/heads/main" --progress
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed on $($c.name). Retrying in 2 seconds..." -ForegroundColor DarkYellow
        Start-Sleep -Seconds 2
        git push origin "$($c.hash):refs/heads/main" --progress
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Error uploading $($c.name)." -ForegroundColor Red
            exit 1
        }
    }
    Write-Host ">>> $($c.name) Upload Complete! [OK]" -ForegroundColor Green
}

git push -u origin main

Write-Host "`n========================================================" -ForegroundColor Cyan
Write-Host " SUCCESS: 100% of LUMIO Studio is now LIVE on GitHub!  " -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
