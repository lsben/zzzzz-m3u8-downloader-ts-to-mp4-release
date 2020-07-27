import React from 'react';
import TopPart from '../components/TopPart';
import DocPart from '../components/DocPart';
import Header from '../components/Header';
import BottomPart from '../components/BottomPart';

function HomePage() {
  var links = {
    msi_path : "https://github.com/lsben/zzzzz-m3u8-downloader-ts-to-mp4-release/releases/download/1.0.0/Lsforever.m3u8.downloader.setup.Installer.msi",
    zip_path : "https://github.com/lsben/zzzzz-m3u8-downloader-ts-to-mp4-release/releases/download/1.0.0/Lsforever.m3u8.downloader.setup.Installer.zip",
    git_path : "https://github.com/lsben/zzzzz-m3u8-downloader-ts-to-mp4-release"
  }


  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <Header />
      <TopPart links={links}/>
      <DocPart links={links} />
      <BottomPart />

    
    </div>
  );
}

export default HomePage;