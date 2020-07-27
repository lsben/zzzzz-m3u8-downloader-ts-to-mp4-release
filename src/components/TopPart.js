import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { AiFillWindows, AiFillFileZip, AiFillGithub } from 'react-icons/ai';
import logo from '../logo.svg';

const TopPart = (props) => {
  const f_msi = () => {
    window.location.href = props.links.msi_path;
  }

  const f_zip = () => {
    window.location.href = props.links.zip_path;
 }

 const f_git = () => {
  window.open(props.links.git_path, '_blank');
}

  var version_badge_src = "https://img.shields.io/github/v/release/lsben/zzzzz-m3u8-downloader-ts-to-mp4-release?logo=GitHub&color=blueviolet";
  return (
    <div style={{ backgroundColor: "#03A9F4" , marginTop:0, marginBottom: 0 , textAlign: "center", color:"white" }}>
      <Jumbotron style={{ backgroundColor: "#03A9F4", marginTop:0, marginBottom: 0 ,paddingTop:10,paddingBottom:30}}>
        <img alt="LSFOREVER" src={logo} type='svg' className="icona" style={{ width: 200, height: 200 }} />
        <h1 className="display-3"  style={{color:"#212121", textShadow: "3px 5px 10px #000"}} >LSFOREVER m3u8 downloader</h1>
        <p className="lead">This application lets you to download stream videos with m3u8 files..</p>
        <hr className="my-2"  />
        <p>Hsl m3u8 downloader alows you to download m3u8 ts file parts and merge into a playable mp4 video. You can download stream videos from websites using this if you know how to locate m3u8 file using network tab of your browser.</p>
        <p>You can download m3u8 streams with both file or copy pasting the m3u8 file content.</p>
        <img alt="LSFOREVER" src={version_badge_src} style={{marginBottom:10}}/>
        <p className="lead" >
          <Button onClick={f_msi} color="primary" style={{marginTop: 3 }}><AiFillWindows style={{ marginRight: 5, marginBottom: 3 }} />Download for windows (22.2 MB)</Button>
          <Button onClick={f_zip} color="primary" style={{ marginLeft: 5,marginTop: 3 }} ><AiFillFileZip style={{ marginRight: 5, marginBottom: 3 }} />Download as zip (21.5 MB)</Button>
        </p>
        <Button onClick={f_git} color="success" style={{ marginTop: 5 }}><AiFillGithub style={{ marginRight: 5, marginBottom: 3 }} />View on Github</Button>
      </Jumbotron>
    </div>
  );
};

export default TopPart;