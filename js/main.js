// PharmaGuardian AI - Main Navigation Logic

/**
 * Handles navigation between the landing page, chat interface, 
 * and admin dashboard as required by Hackfusion 3.0.
 */
function navigateTo(feature) {
    console.log("System Routing to:", feature);
    
    switch(feature) {
        case 'chat':
            [span_0](start_span)[span_1](start_span)// Redirects to the Conversational AI interface[span_0](end_span)[span_1](end_span)
            window.location.href = 'chat.html';
            break;
        case 'admin':
            [span_2](start_span)// Redirects to the Admin Inventory & Proactive Alert view[span_2](end_span)
            window.location.href = 'admin.html';
            break;
        case 'logs':
            [span_3](start_span)[span_4](start_span)// Opens the mandatory Observability/Trace Log link[span_3](end_span)[span_4](end_span)
            // Replace the URL below with your actual LangSmith/Langfuse public link later
            window.open('https://smith.langchain.com/', '_blank');
            break;
        default:
            console.warn("Feature path not defined.");
    }
}

// Initialization log to confirm script is connected
document.addEventListener('DOMContentLoaded', () => {
    console.log("PharmaGuardian AI: Agentic System Online.");
});
