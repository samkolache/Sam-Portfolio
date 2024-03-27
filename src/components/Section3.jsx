import CMPImage from '../assets/cmp-project.png'

export default function SectionThree() {
    return(
        <div className="container mx-auto p-20">
            <div className="grid grid-cols-2 gap-8">
                <div className="p-4">
                    <p className="text-4xl font-bold mb-4 text-custom-color">Projects</p>
                    <img src={CMPImage} className='' />
                </div>
                <div className="p-4">
                    
                </div>
            </div>
        </div>

    )
}