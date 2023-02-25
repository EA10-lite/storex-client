import React from "react";

// icons
import { FiDownload } from 'react-icons/fi';

const ExportButton = ({ download_func }) => {
    return (
        <a className="app__export-btn" href="#download" onClick={download_func}>
            <FiDownload title="Export Customers" />
            <span> Export </span>
        </a>
    )
}

export default ExportButton;