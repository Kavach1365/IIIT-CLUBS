import React, { useState } from "react";
import axios from "axios";
import "./BugReport.css";

const BugReport = () => {
  const [feedback, setFeedback] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const data = {
      feedback,
      suggestions,
    };

    try {
      const response = await axios.post(
        "http://localhost:8005/send-email",
        data
      );

      if (response.status === 200) {
        alert("Feedback sent successfully!");
        setFeedback("");
        setSuggestions("");
      } else {
        alert("Failed to send feedback.");
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
      alert("Failed to send feedback.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bug-report-container">
      <h1 className="heading">Submit Feedback and Suggestions</h1>
      <form onSubmit={handleSubmit} className="bug-report-form">
        <div className="form-group">
          <label htmlFor="feedback" className="label">
            Feedback:
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            rows={5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="suggestions" className="label">
            Suggestions:
          </label>
          <textarea
            id="suggestions"
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
            required
            rows={5}
          />
        </div>
        <button type="submit" className="submit-button" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
};

export default BugReport;
