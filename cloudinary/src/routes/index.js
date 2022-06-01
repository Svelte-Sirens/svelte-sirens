import { Cloudinary } from '@cloudinary/url-gen'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity'
import { face } from '@cloudinary/url-gen/qualifiers/focusOn'
import { max } from '@cloudinary/url-gen/actions/roundCorners'
import { format, quality } from '@cloudinary/url-gen/actions/delivery'
import { Position } from '@cloudinary/url-gen/qualifiers'

export function get() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'tamas-demo',
    },
    url: {
      secure: true
    }
  })


  const img = cld.image('demos/mug')
  console.log(img)
  // img
  //   .overlay(
  //     source(
  //       image('demos/sirens-logo').transformation(
  //         new Transformation().resize(scale().width(0.97)).reshape(distortArc('-15.0))'))
  //       )
  //     )
  //       .position(new Position().offsetX(103).offsetY(10))
  //       .blendMode('multiply')
  //   )
  //   .resize(scale().width(600))
  // const src = img.toURL()
  return {
    body: {
      img
    }
  }
}
