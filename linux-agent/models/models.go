package models

type Package struct {
	Name    string `json:"name"`
	Version string `json:"version"`
}

type CISResult struct {
	CheckName string `json:"checkName"`
	Status    string `json:"status"`
	Evidence  string `json:"evidence"`
}

type AgentReport struct {
	Hostname string      `json:"hostname"`
	OS       string      `json:"os"`
	IPAddress string    `json:"ipAddress"`
	Packages []Package   `json:"packages"`
	Checks   []CISResult `json:"checks"`
}
