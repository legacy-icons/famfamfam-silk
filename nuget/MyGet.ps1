$nuget = $env:NuGet

#parse the version number out of package.json
$pversion = ((Get-Content $env:SourcesPath\package.json) -join "`n" | ConvertFrom-Json).version

#create packages
& $nuget pack "nuget\famfamfam-silk.nuspec" -Verbosity detailed -NonInteractive -NoPackageAnalysis -BasePath $env:SourcesPath -Version $pversion
