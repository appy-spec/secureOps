package collector

import (
	"os"
	"os/exec"
	"strings"
)

func GetHostname() string {

	hostname, _ := os.Hostname()

	return hostname
}

func GetOS() string {

	out, _ := exec.Command("bash", "-c",
		"cat /etc/os-release | grep PRETTY_NAME",
	).Output()

	return strings.TrimSpace(string(out))
}

func GetIPAddress() string {

	out, _ := exec.Command("bash", "-c",
		"hostname -I | awk '{print $1}'",
	).Output()

	return strings.TrimSpace(string(out))
}