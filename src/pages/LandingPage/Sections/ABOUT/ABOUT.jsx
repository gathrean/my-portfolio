import React from 'react';

import './ABOUT.css';

import GathreanIcon from '../../../../assets/icons/project-icons/gathrean-Icon.png';

export function ABOUT() {
  return (
    <div className="section-container">
      <hr />
      <h1>About Me</h1>
      <p>This is my lore</p>
      <div clasName="section-container-child">
        <div className="about-me-container">
          <div className="about-me-images"><img src={GathreanIcon} alt="Gathrean" /></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam orci risus, varius nec nisi a, consectetur iaculis nibh. Vivamus sollicitudin rutrum consequat. Sed ligula purus, convallis sed sagittis ut, lobortis vitae mauris. In quis bibendum ante. Praesent pellentesque luctus elit a consequat. Nulla facilisi. Vivamus pulvinar, leo at suscipit viverra, libero nisl fringilla nisi, at volutpat diam elit interdum nibh. Ut ante ligula, fermentum eget libero sit amet, tristique consequat nulla. Nulla posuere consequat lorem id auctor. In congue, augue sit amet accumsan vulputate, lorem mi aliquam leo, sit amet gravida turpis ex non nibh. Etiam congue erat vitae magna commodo, at hendrerit lacus gravida. Proin dignissim dui commodo nulla feugiat, id cursus libero dictum. Fusce varius sodales urna sed cursus. Donec ornare, nisl ut aliquam viverra, ex sapien pulvinar elit, tincidunt lacinia magna massa dapibus purus.
            <br /> <br />
            Nulla tempor nec nisl ut interdum. Mauris commodo lacus ac felis volutpat tincidunt. Proin a auctor metus. In non ligula sagittis lorem iaculis finibus. Phasellus in metus eget sapien vehicula gravida. Vestibulum ac interdum ante. Donec accumsan velit mi, eu consequat ante egestas quis. Nullam vitae metus pretium, accumsan felis et, interdum purus. Vestibulum tincidunt mi orci, et condimentum nisi fringilla vel.
            <br /> <br />
            Praesent sit amet risus ac est venenatis scelerisque ac ut tortor. Aliquam erat volutpat. Vestibulum laoreet dapibus nisl sed faucibus. Cras euismod tellus lacus, in porta sapien finibus nec. Phasellus scelerisque elementum dictum. Proin sit amet fringilla neque. Morbi quis dui non ex euismod porttitor id dignissim nunc. Donec pellentesque viverra libero et tincidunt. Maecenas condimentum ultrices euismod. Ut ut sapien vitae ligula ultrices pharetra nec ac dolor.
            <br /> <br />
            Duis eu volutpat nisl, eu efficitur felis. Aliquam pharetra dolor purus, eu ornare ante euismod a. Vivamus suscipit aliquam est interdum suscipit. Morbi mi neque, consequat eget sem ac, mollis vulputate dolor. Integer tellus nulla, ultrices id rutrum a, placerat non diam. Quisque ut fermentum tortor. Quisque dolor urna, aliquet at lacus ac, ornare condimentum neque. Proin iaculis convallis efficitur.
            <br /> <br />
            Integer ligula nisi, maximus ut luctus ac, scelerisque ut felis. Ut ex sapien, hendrerit sed magna sit amet, tempor ultrices velit. Proin hendrerit mauris pellentesque nisl ornare, viverra imperdiet velit vestibulum. Morbi id massa ut nunc euismod iaculis quis quis purus. Suspendisse interdum magna eu felis ultrices sollicitudin. In hac habitasse platea dictumst. Proin placerat euismod urna in molestie. Aliquam volutpat vestibulum nunc, eget vehicula sem scelerisque eget. Ut at eleifend augue. Quisque eu mollis dui, sit amet maximus arcu. Mauris interdum risus at venenatis tincidunt. Donec quis ex pharetra, aliquet augue et, cursus dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris dictum metus a mi ornare, ac scelerisque velit tristique.
          </p>
        </div>
      </div>
    </div>
  );
}