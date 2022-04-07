import React, { useState, useEffect, useRef } from "react"

import ReactQuill, { Quill } from 'react-quill'
import quillEmoji from 'quill-emoji'
import 'react-quill/dist/quill.snow.css'
import 'quill-emoji/dist/quill-emoji.css' //这个不引入的话会出现emoji框一直在输入框下面的情况
import {ImageDrop} from 'quill-image-drop-module'

const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji

Quill.register({
  'formats/emoji':EmojiBlot,
  'modules/emoji-shortname': ShortNameEmoji,
  'modules/emoji-toolbar': ToolbarEmoji,
  'modules/emoji-textarea': TextAreaEmoji,
  'modules/ImageDrop': ImageDrop, //复制粘贴组件
})
const modules = {
  toolbar: {
    container: [
      [{ 'size': ['small', false, 'large', 'huge'] }], //字体设置
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }], //标题字号，不能设置单个字大小
      ['bold', 'italic', 'underline', 'strike'],  
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'], // a链接和图片的显示
      [{ 'align': [] }],
      [{
        'background': ['rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
          'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
          'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
          'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
          'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
          'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
          'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
          'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
          'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
          'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
          'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
          'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)']
      }],
      [{
        'color': ['rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
          'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
          'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
          'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
          'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
          'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
          'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
          'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
          'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
          'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
          'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
          'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)']
      }],
      ['clean'], //清空
      ['emoji'], //emoji表情，设置了才能显示
      // ['video2'], //我自定义的视频图标，和插件提供的不一样，所以设置为video2
    ],
    handlers: {
      // 'image': this.imageHandler.bind(this), //点击图片标志会调用的方法
      // 'video2': this.showVideoModal.bind(this),
    },
  },
  // ImageExtend: {
  //   loading: true,
  //   name: 'img',
  //   action: RES_URL + "connector?isRelativePath=true",
  //   response: res => FILE_URL + res.info.url
  // },
  ImageDrop: true,
  'emoji-toolbar': true,  //是否展示出来
  "emoji-textarea": false, //我不需要emoji展示在文本框所以设置为false
  "emoji-shortname": true, 
}

function QuillReact ({value = '', style = {}, onChange}) {
  const reactQuillRef = useRef(null)
  const [content, setContent] = useState()

  useEffect(()=>{
    setContent(value)
  }, [value])

  const handleChange = (val) => {
    setContent(val)
    onChange && onChange(val)
  }

  console.log(content)
  return (
    <div style={{paddingBottom: '50px'}}>
      <ReactQuill
        ref={reactQuillRef}
        modules={modules}
        theme="snow"
        style={style}
        value={content}
        onChange={handleChange}
      />
    </div>
  )
}

export default QuillReact
