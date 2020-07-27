import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const DocPart = (props) => {

  var badge_src = "https://img.shields.io/static/v1?labelColor=brightgreen&color=blue&label=Zworld+Inc&message=LSFOREVER&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABoklEQVRIS72WsU3EMBSGf6e4a8gGTHArZIYoOiRoaYhSMQAbMABNChpKhOAuzgphhFuADUgXCRk5xMZ2/OxwAlLaL//n/73nlzD8w8MWMAQAHZfnuWCMvTZNk8l367oWVVUFdWIQDZDiUpRzPr4jxQFcV1V15x5UAIIZBwtBRlHpQgEURAKSJLksy/JBAaTwGGyIqz0KEgSo9ChhpOkV6/t7KvU+yAeAhHIh17U4cXIX5oMoF1aqZC184lNttK6vCVzIKYA3w8Uj5/ziJ6f3dZsLsVy44littmwYdnLdbAZlQ3VeLF0WxEwPNps1OxwGX3FNoBDipm3bWzOOcmLl32zNoii2+/3+2QPTre468kJMO1TvT5BZqHS1BOLtIuoOZFmWdl33buzPOna2YNVh4T34ujr6+V2IM6NIkEV1XYTqIYAewIkxq/4EokQHBqyNlIXTtdQJUTfru0PeEx9kCn5iwPlsAqj54xnvx0CoDh7Xfd+Q0I23xnhQ+XvzhQFnodjoPYmBYi4mp3OZQG2s4CUAEkIV2Mlz7CeEHgGx9Byz/wn3zKYaJ7z3/gAAAABJRU5ErkJggg==";
  var plfrm_badge_src = "https://img.shields.io/static/v1?label=Platform&message=Windowsx32+|+Windowsx64&color=brightgreen&logo=Windows&logoColor=blue&labelColor=yellow";
  var version_badge_src = "https://img.shields.io/github/v/release/lsben/zzzzz-m3u8-downloader-ts-to-mp4-release?logo=GitHub";

  return (
    <div  style={{ backgroundColor: "#B3E5FC", justifyContent: "flex-start", paddingBottom: 50, paddingTop: 20, paddingLeft: 20, paddingRight: 20 }} >

      <Container style={{ backgroundColor: "#B3E5FC" }} >
        <Row>
          <h2>Application by</h2>
        </Row>
        <Row>
          <Col>
            <img alt="LSFOREVER" src={badge_src} />
          </Col>
        </Row>

        <Row>
          <Col>
            <img alt="Avatar" src="https://github.com/lsben.png?size=100" style={{ paddingTop: 10 }} />
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="https://github.com/lsben" >@lsben</a>
          </Col>
        </Row>

        <Row>
          <h2 style={{ marginTop: 10 }}>Platform & Version Support</h2>
        </Row>
        <Row>
          <Col>
            <img alt="LSFOREVER" src={plfrm_badge_src} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{marginTop:10}}>This is an application designed for windows.</p>
          </Col>
        </Row>


        <Row>
          <h2 style={{ marginTop: 10 }} >Installation</h2>
        </Row>
        <Row>
          <Col>
            <img alt="LSFOREVER" src={version_badge_src} />
          </Col>
        </Row>
        <Row>
        <Col>
            <p style={{marginTop:10}} >You can download the latest msi setup (Installer) from any of the below links. Use the second link if you want a zip file of installer.</p>
            <p>To Download Application installer , <a href={props.links.msi_path}>Click here</a></p>
            <p>To Download zip file of installer , <a href={props.links.zip_path}>Click here</a></p>
            <p>Download the installer and run the setup to install application</p>
          </Col>
        </Row>


        <Row>
          <h2 style={{ marginTop: 10 }} >Usage</h2>
        </Row>
        <Row>
          <Col>
            <p>Download and install the application as mentioned in Installation .</p>
            <p>Open the application.Then you can download hsl m3u8 streams by entering the m3u8 content or just entering a downloaded m3u8 file .</p>
          </Col>
        </Row>

        <Row>
          <h2 style={{ marginTop: 10 }} >Support</h2>
        </Row>
        <Row>
          <Col>
          <p>Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.</p>
          </Col>
        </Row>

        <Row>
          <h2 style={{ marginTop: 10 }} >Roadmap</h2>
        </Row>
        <Row>
          <Col>
            <p>If you have ideas for releases in the future, it is a good idea to list them in the README from github.</p>
          </Col>
        </Row>

        <Row>
          <h2 style={{ marginTop: 10 }} >Contributing</h2>
        </Row>
        <Row>
          <Col>
            <p>Pull requests are welcome if you want to make suggessions as mentioned above.</p>
          </Col>
        </Row>

        <Row>
          <h2 style={{ marginTop: 10 }} >License</h2>
        </Row>
        <Row>
          <Col>
            <p>License <a href="https://choosealicense.com/licenses/mit/">MIT</a></p>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default DocPart;