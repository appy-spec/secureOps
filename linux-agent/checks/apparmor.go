package checks

import (
	"bytes"
	"os/exec"
	"strings"

	"linux-agent/models"
)

func CheckAppArmor() models.CISResult {

	cmd := exec.Command("systemctl", "is-active", "apparmor")

	var out bytes.Buffer
	cmd.Stdout = &out

	err := cmd.Run()

	if err != nil {

		return models.CISResult{
			CheckName: "AppArmor Enabled",
			Status:    "FAIL",
			Evidence:  err.Error(),
		}
	}

	if strings.Contains(out.String(), "active") {

		return models.CISResult{
			CheckName: "AppArmor Enabled",
			Status:    "PASS",
			Evidence:  "AppArmor active",
		}
	}

	return models.CISResult{
		CheckName: "AppArmor Enabled",
		Status:    "FAIL",
		Evidence:  "AppArmor inactive",
	}
}