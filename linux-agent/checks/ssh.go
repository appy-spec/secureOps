package checks

import (
	"os"
	"strings"

	"linux-agent/models"
)

func CheckSSHRootLogin() models.CISResult {

	data, err := os.ReadFile("/etc/ssh/sshd_config")

	if err != nil {

		return models.CISResult{
			CheckName: "SSH Root Login Disabled",
			Status:    "FAIL",
			Evidence:  err.Error(),
		}
	}

	content := string(data)

	if strings.Contains(content, "PermitRootLogin no") {

		return models.CISResult{
			CheckName: "SSH Root Login Disabled",
			Status:    "PASS",
			Evidence:  "PermitRootLogin no found",
		}
	}

	return models.CISResult{
		CheckName: "SSH Root Login Disabled",
		Status:    "FAIL",
		Evidence:  "PermitRootLogin no not found",
	}
}