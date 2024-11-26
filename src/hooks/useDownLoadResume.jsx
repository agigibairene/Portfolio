export default function useDownLoadResume(resumePdf){
    // const [isDownloading, setIsDownLoading] = useState(false);

    const handleDownload = async () => {
        // setIsDownLoading(true);
        try {
          const response = await fetch(resumePdf);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', resumePdf); 
          document.body.appendChild(link);
          link.click();
          
          link.remove();
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error("Download failed:", error);
        //   setIsDownLoading(false);
        }
        
    };

    return { handleDownload };

}


