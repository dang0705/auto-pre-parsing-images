vue2 H5/PC 跨端同库源码 活动专题 的神器

## 使用:

```
// main.js:

import mappingImages from '@common-plugins/images';
Vue.use(mappingImages);

// app.vue

// vue2.7 setup
getCurrentInstance().proxy.$mappingImages({
  customPath: 'images/common'
})
  
// vue2.6
this.$mappingImages({ customPath: 'images/common' })
  
  
// home.vue( 活动页首页，此处举例 )  
// vue2.7的写法同上，这里不赘述
this.$mappingImages({ common, project, device });

```

## 入参说明


| prop          | type   | desc                                                                                 | default | eg            |
| ------------- | ------ | ------------------------------------------------------------------------------------ | ------- | ------------- |
| common        | String | 顶层以及跨终端、项目下的通用目录名称，适合存放logo，通用icon图等，须在图片目录中对应 | common  |               |
| device        | String | 对应的终端名称，如存在须在图片目录中对应                                             |         | H5            |
| project       | String | 对用的项目名称，如存在须在图片目录中对应                                             |         | FOORBAR       |
| imagesDirName | String | 图片最近的根路径，详见下方目录。                                                     | images  |               |
| customPath    | String | 自定义选择要映射的图片路径                                                           |         | images/common |

## 图片目录参考

```
project  
│
└───src
│   │
│   └───assets
│   │    │
│   │    ├──images (对应imagesDirName)
│   │    │       │
│   │    │       ├─common (对应common入参) 
│   │    │       │
│   │    │       ├─H5
│   │    │       │  ├─common (对应common入参)
│   │    │       │  ├─FOOR   (对应project入参) 
│   │    │       │  └─BAR    (对应project入参) 
│   │    │       │
│   │    │       └─PC
│   │    │         ├─common (对应common入参)
│   │    │         ├─FOOR   (对应project入参) 
│   │    │         └─BAR    (对应project入参) 
│   │    │
│   └──...otherDir                      

  
```
