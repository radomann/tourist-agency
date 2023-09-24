import { useEffect, useState } from "react";
import { AppLayout } from "../../layout";
import { myGallery } from "../../components/imagegallery";
const {render} = myGallery;

export const SinglePage = () => {
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/1000/600/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/1000/600/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/1000/600/",
        },
      ];

    // TODO get destination data and place them in return state
    // TODO send post image and get gallery. Remove fixed images. 


    // const [data, setData] = useState(null)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     const fetchAllData = async () => {
    //         try {
    //             const result = render(images)
    //             console.log(render(images));
    //             setData(images)
    //         }catch (err){
    //             setError(err);
    //         }
    //     }
    //     fetchAllData()
    // },[])

    return <>
        {AppLayout}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">

                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h6 className="section-title bg-white text-start text-primary pe-3">Destinations</h6>
                        <h1 className="mb-4"><span className="text-primary">Destination name</span></h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elit enim, laoreet vel vehicula quis, cursus ut dolor. Phasellus ornare felis a dui facilisis ultrices. Quisque ac est ut lectus mattis tincidunt viverra a mauris. Aliquam ornare, metus quis condimentum ultrices, velit velit aliquam lectus, vel faucibus turpis lacus eu tortor. Sed interdum, sem in semper bibendum, erat ligula ultricies dui, nec ullamcorper odio enim accumsan diam. Fusce feugiat nunc vitae dui fringilla gravida. Duis facilisis ornare est, et condimentum neque suscipit sed. Morbi tincidunt eleifend nisi. Nulla non nunc eu est vulputate elementum sed nec urna. Praesent gravida lacinia sapien, eget aliquet erat. Cras faucibus est tortor. Aliquam condimentum luctus ex ut pharetra. Suspendisse interdum, turpis a malesuada dapibus, sem mauris laoreet nisl, eu vulputate neque dui non augue.

                            Praesent tincidunt tempus diam, ut ultricies quam vestibulum in. Donec vel congue nulla. Aenean placerat aliquet neque, non feugiat massa lobortis eget. Nulla consequat facilisis ornare. Nunc placerat ex at pretium bibendum. Maecenas dignissim, neque eget blandit consectetur, erat nunc rutrum lacus, sit amet consequat leo diam vitae leo. Nullam gravida sagittis nisl, in faucibus felis elementum vel. Sed tortor nisl, hendrerit porta sem in, eleifend facilisis libero. Pellentesque quis nulla et quam commodo facilisis nec id risus. Nunc sagittis at massa eget suscipit. Maecenas commodo posuere facilisis. Donec nisl sapien, lacinia in molestie eu, finibus in metus.

                            Cras consectetur interdum magna, ut condimentum massa pretium et. Vivamus quis metus sodales, posuere nulla quis, maximus quam. Vestibulum eu ipsum ut neque placerat egestas ac sit amet nisl. Sed efficitur sodales diam ut fringilla. Nulla augue elit, pretium id mattis vel, molestie at est. Etiam iaculis libero at placerat blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. In vestibulum ornare tortor, ac mattis mi condimentum eget. Sed pellentesque tristique aliquam. Sed bibendum iaculis neque. Nam bibendum semper mi, sed finibus magna euismod non. Curabitur fermentum iaculis nulla quis elementum. Morbi at convallis elit. Sed nec suscipit enim. Aliquam eget erat dui.

                            Donec luctus nisl quis dui rutrum, ac sagittis justo pharetra. Vestibulum orci mauris, maximus ut iaculis et, condimentum nec lorem. Donec porta sapien quis venenatis accumsan. Aenean porttitor vulputate bibendum. Maecenas ut varius diam. Sed at eros bibendum, sollicitudin lacus id, sollicitudin augue. Etiam nec leo id lorem faucibus maximus in at mi. Integer et magna dui.

                            In eget nisl vel urna convallis molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi rhoncus, velit et ullamcorper consequat, dolor augue finibus urna, et aliquet sem arcu venenatis risus. Cras sed arcu turpis. Fusce lacinia est ac odio tempor tempus. Quisque non est lorem. In pulvinar sem ornare, aliquet turpis vel, viverra eros. Quisque suscipit justo et tempor ornare. Cras aliquam volutpat sodales. Ut cursus id ipsum et consectetur. Curabitur posuere ex augue, ac luctus massa rhoncus ut. Nunc accumsan felis ut tortor maximus, vel pulvinar nunc pellentesque. Etiam laoreet sollicitudin mattis.</p>
                       
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                    {/* TODO render images only if they exist */}
                    <div className="row">
                    {render(images) }
                    </div>
                    <div className="row">
                    <p className="mt-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        {/* TODO put data for bay this destination */}
                    </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </>
}