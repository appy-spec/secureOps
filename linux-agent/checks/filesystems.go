package checks

import (
	"bytes"
	"os/exec"
	"strings"

	"linux-agent/models"
)

func CheckUnusedFilesystems() models.CISResult {

	cmd := exec.Command("modprobe", "-n", "-v", "cramfs")

	var out bytes.Buffer
	cmd.Stdout = &out

	err := cmd.Run()

	if err != nil {

		return models.CISResult{
			CheckName: "Unused Filesystems Disabled",
			Status:    "FAIL",
			Evidence:  err.Error(),
		}
	}

	result := out.String()

	if strings.Contains(result, "/bin/true") {

		return models.CISResult{
			CheckName: "Unused Filesystems Disabled",
			Status:    "PASS",
			Evidence:  "cramfs disabled",
		}
	}

	return models.CISResult{
		CheckName: "Unused Filesystems Disabled",
		Status:    "FAIL",
		Evidence:  "cramfs enabled",
	}
}