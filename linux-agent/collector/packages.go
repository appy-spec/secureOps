package collector

import (
	"bufio"
	"bytes"
	"os/exec"
	"strings"

	"linux-agent/models"
)

func GetInstalledPackages() ([]models.Package, error) {

	cmd := exec.Command("dpkg", "-l")

	var out bytes.Buffer
	cmd.Stdout = &out

	err := cmd.Run()

	if err != nil {
		return nil, err
	}

	var packages []models.Package

	scanner := bufio.NewScanner(&out)

	for scanner.Scan() {

		line := scanner.Text()

		fields := strings.Fields(line)

		if len(fields) >= 3 && fields[0] == "ii" {

			packages = append(packages, models.Package{
				Name:    fields[1],
				Version: fields[2],
			})
		}
	}

	return packages, nil
}

