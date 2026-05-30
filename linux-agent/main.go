package main

import (
	"fmt"

	"linux-agent/checks"
	"linux-agent/collector"
	"linux-agent/models"
	"linux-agent/sender"
)

func main() {

	fmt.Println("Linux Security Agent Starting...")

	hostname := collector.GetHostname()

	osVersion := collector.GetOS()

	ipAddress := collector.GetIPAddress()

	packages, err := collector.GetInstalledPackages()

	if err != nil {

		fmt.Println(
			"Package Collection Error:",
			err,
		)
	}

	checkResults := []models.CISResult{

		checks.CheckSSHRootLogin(),

		checks.CheckFirewall(),

		checks.CheckAuditd(),

		checks.CheckAppArmor(),

		checks.CheckPasswordPolicy(),

		checks.CheckPasswordComplexity(),

		checks.CheckUnusedFilesystems(),

		checks.CheckWorldWritableFiles(),

		checks.CheckTimeSync(),

		checks.CheckGDMLogin(),
	}

	report := models.AgentReport{

		Hostname: hostname,

		OS: osVersion,

		IPAddress: ipAddress,

		Packages: packages,

		Checks: checkResults,
	}

	fmt.Println("\nAgent Report Generated")

	sender.SendReport(report)
}

