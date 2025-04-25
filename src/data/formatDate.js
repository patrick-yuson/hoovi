export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const timeOnly = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      });
      const dateOnly = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    return `${dateOnly} ${timeOnly}`;
}