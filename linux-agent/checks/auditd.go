package checks

import (
	"bytes"
	"os/exec"
	"strings"

	"linux-agent/models"
)

func CheckAuditd() models.CISResult {

	cmd := exec.Command("systemctl", "is-active", "auditd")

	var out bytes.Buffer
	cmd.Stdout = &out

	err := cmd.Run()

	if err != nil {

		return models.CISResult{
			CheckName: "Auditd Running",
			Status:    "FAIL",
			Evidence:  err.Error(),
		}
	}

	if strings.Contains(out.String(), "active") {

		return models.CISResult{
			CheckName: "Auditd Running",
			Status:    "PASS",
			Evidence:  "auditd active",
		}
	}

	return models.CISResult{
		CheckName: "Auditd Running",
		Status:    "FAIL",
		Evidence:  "auditd inactive",
	}
}