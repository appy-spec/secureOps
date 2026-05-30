package checks

import (
	"bytes"
	"os/exec"

	"linux-agent/models"
)

func CheckWorldWritableFiles() models.CISResult {

	cmd := exec.Command("bash", "-c",
		"find / -xdev -type f -perm -0002 2>/dev/null | head")

	var out bytes.Buffer
	cmd.Stdout = &out

	cmd.Run()

	result := out.String()

	if result == "" {

		return models.CISResult{
			CheckName: "No World Writable Files",
			Status:    "PASS",
			Evidence:  "No world writable files found",
		}
	}

	return models.CISResult{
		CheckName: "No World Writable Files",
		Status:    "FAIL",
		Evidence:  result,
	}
}