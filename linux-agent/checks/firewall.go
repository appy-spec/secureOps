package checks

import (
	"bytes"
	"os/exec"
	"strings"

	"linux-agent/models"
)

func CheckFirewall() models.CISResult {

	cmd := exec.Command("ufw", "status")

	var out bytes.Buffer
	cmd.Stdout = &out

	err := cmd.Run()

	if err != nil {

		return models.CISResult{
			CheckName: "Firewall Enabled",
			Status:    "FAIL",
			Evidence:  err.Error(),
		}
	}

	result := out.String()

	if strings.Contains(result, "Status: active") {

		return models.CISResult{
			CheckName: "Firewall Enabled",
			Status:    "PASS",
			Evidence:  "UFW active",
		}
	}

	return models.CISResult{
		CheckName: "Firewall Enabled",
		Status:    "FAIL",
		Evidence:  "UFW inactive",
	}
}