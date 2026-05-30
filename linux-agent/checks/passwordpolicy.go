package checks

import (
	"os"
	"strings"

	"linux-agent/models"
)

func CheckPasswordPolicy() models.CISResult {

	data, err := os.ReadFile("/etc/login.defs")

	if err != nil {

		return models.CISResult{
			CheckName: "Password Expiry Policy",
			Status:    "FAIL",
			Evidence:  err.Error(),
		}
	}

	content := string(data)

	if strings.Contains(content, "PASS_MAX_DAYS") {

		return models.CISResult{
			CheckName: "Password Expiry Policy",
			Status:    "PASS",
			Evidence:  "PASS_MAX_DAYS configured",
		}
	}

	return models.CISResult{
		CheckName: "Password Expiry Policy",
		Status:    "FAIL",
		Evidence:  "PASS_MAX_DAYS missing",
	}
}