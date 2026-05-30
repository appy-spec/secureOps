package sender

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"

	"linux-agent/models"
)

func SendReport(report models.AgentReport) {

	jsonData, err := json.Marshal(report)

	if err != nil {
		fmt.Println("JSON Error:", err)
		return
	}

	apiURL := "http://13.205.16.136:5000/api/agent/report"

	resp, err := http.Post(
		apiURL,
		"application/json",
		bytes.NewBuffer(jsonData),
	)

	if err != nil {
		fmt.Println("API Error:", err)
		return
	}

	defer resp.Body.Close()

	fmt.Println("Report Sent Successfully")
}
