package checks

import (
	"os"
	"strings"

	"linux-agent/models"
)

func CheckPasswordComplexity() models.CISResult {

	data, err := os.ReadFile("/etc/pam.d/common-password")

	if err != nil {

		return models.CISResult{
			CheckName: "Password Complexity",
			Status:    "FAIL",
			Evidence:  err.Error(),
		}
	}

	content := string(data)

	if strings.Contains(content, "pam_pwquality.so") {

		return models.CISResult{
			CheckName: "Password Complexity",
			Status:    "PASS",
			Evidence:  "pam_pwquality configured",
		}
	}

	return models.CISResult{
		CheckName: "Password Complexity",
		Status:    "FAIL",
		Evidence:  "pam_pwquality missing",
	}
}