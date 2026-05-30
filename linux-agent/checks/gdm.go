package checks

import (
	"os"
	"strings"

	"linux-agent/models"
)

func CheckGDMLogin() models.CISResult {

	data, err := os.ReadFile("/etc/gdm3/custom.conf")

	if err != nil {

		return models.CISResult{
			CheckName: "GDM Auto Login Disabled",
			Status:    "FAIL",
			Evidence:  err.Error(),
		}
	}

	content := string(data)

	if strings.Contains(content, "AutomaticLoginEnable=false") {

		return models.CISResult{
			CheckName: "GDM Auto Login Disabled",
			Status:    "PASS",
			Evidence:  "Auto login disabled",
		}
	}

	return models.CISResult{
		CheckName: "GDM Auto Login Disabled",
		Status:    "FAIL",
		Evidence:  "Auto login enabled",
	}
}