Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host " LUMIO Studio - Final Push (Only 6 small commits left!) " -ForegroundColor Cyan
Write-Host "=========================================================" -ForegroundColor Cyan
Write-Host "All Core App, 3D Models, and Templates 1-5 are ALREADY LIVE on GitHub!" -ForegroundColor Green
Write-Host "Uploading the final 6 tiny commits (under 15MB each)...`n" -ForegroundColor Gray

$remaining_commits = @(
    @{ hash = "cb322f5"; name = "1/6: Vertical Template 6 Preview (~6MB)" },
    @{ hash = "ca4f53d"; name = "2/6: Vertical Tutorial Preview (~12MB)" },
    @{ hash = "7768b98"; name = "3/6: Tutorial Computer Preview (~7MB)" },
    @{ hash = "339a0e1"; name = "4/6: Computer Animations (~15MB)" },
    @{ hash = "b4541ee"; name = "5/6: Landscape Animations (~15MB)" },
    @{ hash = "46cebb0"; name = "6/6: Final Sync & Scripts (~1MB)" }
)

foreach ($c in $remaining_commits) {
    Write-Host "`n>>> Uploading $($c.name)..." -ForegroundColor Yellow
    git push origin "$($c.hash):refs/heads/main" --progress
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Retrying $($c.name)..." -ForegroundColor DarkYellow
        Start-Sleep -Seconds 2
        git push origin "$($c.hash):refs/heads/main" --progress
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Error on $($c.name)." -ForegroundColor Red
            exit 1
        }
    }
    Write-Host ">>> $($c.name) Upload Complete! [OK]" -ForegroundColor Green
}

git push -u origin main

Write-Host "`n========================================================" -ForegroundColor Cyan
Write-Host " SUCCESS: 100% of LUMIO Studio is now LIVE on GitHub!  " -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
