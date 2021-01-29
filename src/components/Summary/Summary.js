import React from 'react'
import './Summary.css'

// pages
import SummaryCard from '../Summary/SummaryCard'

export default function Summary(props) {
    const allData = props.totalData;

    return (
        <div>
            <h2>Your Observations Summary</h2>
            <div className="summary-container">
                <div className="crcLabelcrcExp">
                    <div className="top-bar">
                        <p><b>Tab 1</b></p>
                        <p>Correct Label, Correct Explanation</p>
                    </div>
                    <div className="scrollable-summary">
                        { allData.map((data, i) => 
                            <SummaryCard key={i} data={data} />
                        )}
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit. Vitae nunc sed velit dignissim sodales ut eu sem integer. Eget nunc lobortis mattis aliquam faucibus purus in massa. At quis risus sed vulputate odio ut enim blandit. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Eros donec ac odio tempor orci dapibus. Feugiat vivamus at augue eget arcu. Nisl tincidunt eget nullam non nisi est sit. Habitasse platea dictumst quisque sagittis purus sit amet. Pharetra magna ac placerat vestibulum lectus. Nulla facilisi etiam dignissim diam. In eu mi bibendum neque egestas. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Diam sit amet nisl suscipit adipiscing bibendum. Ut diam quam nulla porttitor.

Tortor at risus viverra adipiscing at in tellus integer feugiat. Ut faucibus pulvinar elementum integer enim neque volutpat. Integer enim neque volutpat ac tincidunt. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Arcu cursus euismod quis viverra nibh cras. Interdum velit euismod in pellentesque massa placerat. Bibendum ut tristique et egestas. Massa sapien faucibus et molestie ac feugiat. Tempor commodo ullamcorper a lacus. Duis ut diam quam nulla porttitor massa id neque aliquam. Sit amet nisl purus in mollis nunc. Vel facilisis volutpat est velit. Sed cras ornare arcu dui vivamus arcu felis bibendum.

Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Amet luctus venenatis lectus magna. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Leo vel fringilla est ullamcorper eget nulla. Tellus in hac habitasse platea dictumst. Est lorem ipsum dolor sit amet consectetur adipiscing. Nec ullamcorper sit amet risus nullam eget. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id porta nibh venenatis cras sed felis eget. Quis eleifend quam adipiscing vitae. Dignissim diam quis enim lobortis scelerisque fermentum.

Nibh tellus molestie nunc non blandit. Non blandit massa enim nec dui. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Quis commodo odio aenean sed adipiscing. Ut etiam sit amet nisl. Lectus arcu bibendum at varius vel pharetra vel turpis. Integer feugiat scelerisque varius morbi enim nunc. Non blandit massa enim nec dui. Dignissim enim sit amet venenatis urna cursus eget. Senectus et netus et malesuada fames ac turpis egestas. Orci porta non pulvinar neque laoreet suspendisse interdum. Proin sagittis nisl rhoncus mattis rhoncus urna. Parturient montes nascetur ridiculus mus mauris vitae. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.

Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Mattis ullamcorper velit sed ullamcorper. Purus viverra accumsan in nisl. Quis auctor elit sed vulputate mi sit amet mauris commodo. Amet est placerat in egestas erat imperdiet. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Lobortis elementum nibh tellus molestie nunc. At tellus at urna condimentum mattis. Molestie at elementum eu facilisis sed odio morbi. Non curabitur gravida arcu ac.

Eu feugiat pretium nibh ipsum consequat nisl. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Mauris commodo quis imperdiet massa. Justo laoreet sit amet cursus. Amet cursus sit amet dictum sit. Sit amet purus gravida quis blandit turpis cursus. Sagittis vitae et leo duis ut diam quam. Accumsan in nisl nisi scelerisque eu ultrices. Sit amet luctus venenatis lectus magna. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Lorem ipsum dolor sit amet consectetur. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Vel elit scelerisque mauris pellentesque pulvinar.</p> */}
                    </div>
                </div>
                <div className="crcLabelWrngExp"></div>
                <div className="wrngLabelcrcExp"></div>
                <div className="wrngLabelWrngExp"></div>
            </div>
        </div>
    )
}
