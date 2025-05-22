import React from 'react';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';
import { Download } from 'lucide-react';

export function DownloadPdfButton({ previewRef, iconOnly }) {
    const handleDownload = async () => {
        if (!previewRef?.current) return;
        const element = previewRef.current;
        // Wait for all fonts and images to load
        await document.fonts.ready;
        // Use html2canvas-pro to render the preview as a canvas
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            backgroundColor: null, // preserve background
            logging: true,
        });
        const imgData = canvas.toDataURL('image/png');
        // Calculate PDF size for A4
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        // Calculate image dimensions to fit A4
        const imgProps = pdf.getImageProperties(imgData);
        let pdfWidth = pageWidth;
        let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        if (pdfHeight > pageHeight) {
            pdfHeight = pageHeight;
            pdfWidth = (imgProps.width * pdfHeight) / imgProps.height;
        }
        const x = (pageWidth - pdfWidth) / 2;
        const y = (pageHeight - pdfHeight) / 2;
        pdf.addImage(imgData, 'PNG', x, y, pdfWidth, pdfHeight);
        pdf.save('cv.pdf');
    };

    return (
        <button
            onClick={handleDownload}
            aria-label="Download PDF"
            style={iconOnly ? {
                background: '#303F9F', color: 'white', padding: 12, borderRadius: '50%', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center'
            } : {
                background: '#303F9F', color: 'white', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', marginBottom: '16px', display: 'inline-block', border: 'none', cursor: 'pointer'
            }}
        >
            {iconOnly ? <Download size={24} /> : 'Download PDF'}
        </button>
    );
}
