package checks

import (
	"bytes"
	"os/exec"
	"strings"

	"linux-agent/models"
)

func CheckTimeSync() models.CISResult {

	cmd := exec.Command("systemctl", "is-active", "chrony")

	var out bytes.Buffer
	cmd.Stdout = &out

	cmd.Run()

	if strings.Contains(out.String(), "active") {

		return models.CISResult{
			CheckName: "Time Synchronization",
			Status:    "PASS",
			Evidence:  "chrony active",
		}
	}

	return models.CISResult{
		CheckName: "Time Synchronization",
		Status:    "FAIL",
		Evidence:  "chrony inactive",
	}
}