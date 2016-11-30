/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'Roboto': '<script type=\"text/javascript\">  WebFontConfig = {    google: { families: [ \'Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic:latin,cyrillic\' ] }  };  (function() {    var wf = document.createElement(\'script\');    wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') +      \'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\';    wf.type = \'text/javascript\';    wf.async = \'true\';    var s = document.getElementsByTagName(\'script\')[0];    s.parentNode.insertBefore(wf, s);  })(); </script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'background-help',
                            type: 'image',
                            rect: ['0px', '0px', '1360px', '62px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background-help2.png",'0px','0px']
                        },
                        {
                            id: 'btn_logo2Copy',
                            symbolName: 'btn_logo2',
                            type: 'rect',
                            rect: ['30', '12', '293', '38', 'auto', 'auto']
                        },
                        {
                            id: 'btn_back-pageCopy',
                            symbolName: 'btn_back-page',
                            type: 'rect',
                            rect: ['1198', '12', '162', '50', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['448px', '89px', '464px', '100px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(52, 73, 94);\">Този сертификат принадлежи на теб, за успешно преминато </span><span style=\"color: rgb(52, 73, 94); font-weight: 400;\">#1</span><span style=\"color: rgb(52, 73, 94);\">&nbsp;ниво.</span></p>",
                            align: "center",
                            font: ['Roboto', [25, "px"], "rgba(52,73,94,1.00)", "300", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'certi-1',
                            type: 'image',
                            rect: ['376px', '178px', '607px', '429px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"certificate_section_1.png",'0px','0px']
                        },
                        {
                            id: 'btn_online',
                            symbolName: 'btn_online',
                            type: 'rect',
                            rect: ['570px', '631', '219', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'certi-2',
                            type: 'image',
                            rect: ['376px', '854px', '607px', '429px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"certificate_section_2.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-1px', '727px', '100%', '5px', 'auto', 'auto'],
                            fill: ["rgba(189,195,199,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['448px', '762px', '464px', '100px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(52, 73, 94);\">Този сертификат принадлежи на теб, за успешно преминато </span><span style=\"color: rgb(52, 73, 94); font-weight: 400;\">#2</span><span style=\"color: rgb(52, 73, 94);\">&nbsp;ниво.</span></p>",
                            align: "center",
                            font: ['Roboto', [25, "px"], "rgba(52,73,94,1.00)", "300", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'btn_onlineCopy',
                            symbolName: 'btn_online',
                            type: 'rect',
                            rect: ['570px', '1307px', '219', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['-1px', '1394px', '100%', '5px', 'auto', 'auto'],
                            fill: ["rgba(189,195,199,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['448px', '1429px', '464px', '100px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(52, 73, 94);\">Този сертификат принадлежи на теб, за успешно преминато </span><span style=\"color: rgb(52, 73, 94); font-weight: 400;\">#3</span><span style=\"color: rgb(52, 73, 94);\">&nbsp;ниво.</span></p>",
                            align: "center",
                            font: ['Roboto', [25, "px"], "rgba(52,73,94,1.00)", "300", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'certi-3',
                            type: 'image',
                            rect: ['376px', '1521px', '607px', '429px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"certificate_section_3.png",'0px','0px']
                        },
                        {
                            id: 'btn_onlineCopy2',
                            symbolName: 'btn_online',
                            type: 'rect',
                            rect: ['570px', '1974px', '219', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['-1px', '2064px', '100%', '5px', 'auto', 'auto'],
                            fill: ["rgba(189,195,199,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['448px', '2099px', '464px', '100px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(52, 73, 94);\">Този сертификат принадлежи на теб, за успешно преминато </span><span style=\"color: rgb(52, 73, 94); font-weight: 400;\">#4</span><span style=\"color: rgb(52, 73, 94);\">&nbsp;ниво.</span></p>",
                            align: "center",
                            font: ['Roboto', [25, "px"], "rgba(52,73,94,1.00)", "300", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'btn_onlineCopy3',
                            symbolName: 'btn_online',
                            type: 'rect',
                            rect: ['570px', '2644px', '219', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'certi-4',
                            type: 'image',
                            rect: ['376px', '2192px', '607px', '429px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"certificate_section_4.png",'0px','0px']
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['-1px', '2734px', '100%', '5px', 'auto', 'auto'],
                            fill: ["rgba(189,195,199,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['448px', '2769px', '464px', '100px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(52, 73, 94);\">Този сертификат принадлежи на теб, за успешно преминато </span><span style=\"color: rgb(52, 73, 94); font-weight: 400;\">#5</span><span style=\"color: rgb(52, 73, 94);\">&nbsp;ниво.</span></p>",
                            align: "center",
                            font: ['Roboto', [25, "px"], "rgba(52,73,94,1.00)", "300", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'btn_onlineCopy4',
                            symbolName: 'btn_online',
                            type: 'rect',
                            rect: ['570px', '3314px', '219', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'RectangleCopy5',
                            type: 'rect',
                            rect: ['-1px', '3406px', '100%', '5px', 'auto', 'auto'],
                            fill: ["rgba(189,195,199,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'TextCopy7',
                            type: 'text',
                            rect: ['448px', '3441px', '464px', '100px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(52, 73, 94);\">Този сертификат принадлежи на теб, за успешно преминати&nbsp;</span><span style=\"color: rgb(52, 73, 94); font-weight: 400;\">всички</span><span style=\"color: rgb(52, 73, 94);\">&nbsp;нива.</span></p>",
                            align: "center",
                            font: ['Roboto', [25, "px"], "rgba(52,73,94,1.00)", "300", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Certificate_all2',
                            type: 'image',
                            rect: ['376px', '3533px', '607px', '429px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"certificate_section_all.png",'0px','0px']
                        },
                        {
                            id: 'btn_onlineCopy5',
                            symbolName: 'btn_online',
                            type: 'rect',
                            rect: ['570px', '3986px', '219', '46', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'certi-5',
                            type: 'image',
                            rect: ['376px', '2861px', '607px', '429px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"certificate_section_5.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1360px', '4080px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(236,240,241,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "one": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '285px', '70px', 'auto', 'auto'],
                            id: '_1',
                            userClass: '',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/1.png', '0px', '0px']
                        },
                        {
                            id: 'hotspot',
                            type: 'rect',
                            rect: ['0px', '0px', '285', '70', 'auto', 'auto'],
                            symbolName: 'hotspot'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '285px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    labels: {
                        "on": 0,
                        "out": 1000
                    },
                    data: [
                        [
                            "eid204",
                            "left",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '210px'
                        ],
                        [
                            "eid207",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${hotspot}",
                            '210px',
                            '0px'
                        ],
                        [
                            "eid33",
                            "left",
                            0,
                            250,
                            "linear",
                            "${_1}",
                            '0px',
                            '210px'
                        ],
                        [
                            "eid43",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${_1}",
                            '210px',
                            '0px'
                        ]
                    ]
                }
            },
            "two": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_2',
                            rect: ['0px', '0px', '285px', '70px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/2.png', '0px', '0px']
                        },
                        {
                            id: 'hotspot',
                            rect: ['0px', '0', '285', '70', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'hotspot'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '285px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    labels: {
                        "on": 0,
                        "out": 1000
                    },
                    data: [
                        [
                            "eid89",
                            "left",
                            0,
                            250,
                            "linear",
                            "${_2}",
                            '0px',
                            '210px'
                        ],
                        [
                            "eid78",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${_2}",
                            '210px',
                            '0px'
                        ],
                        [
                            "eid208",
                            "left",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '210px'
                        ],
                        [
                            "eid209",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${hotspot}",
                            '210px',
                            '0px'
                        ]
                    ]
                }
            },
            "three": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_3',
                            rect: ['0px', '0px', '285px', '70px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/3.png', '0px', '0px']
                        },
                        {
                            id: 'hotspot',
                            rect: ['0px', '0', '285', '70', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'hotspot'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '285px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    labels: {
                        "on": 0,
                        "out": 1000
                    },
                    data: [
                        [
                            "eid210",
                            "left",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '210px'
                        ],
                        [
                            "eid211",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${hotspot}",
                            '210px',
                            '0px'
                        ],
                        [
                            "eid94",
                            "left",
                            0,
                            250,
                            "linear",
                            "${_3}",
                            '0px',
                            '210px'
                        ],
                        [
                            "eid96",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${_3}",
                            '210px',
                            '0px'
                        ]
                    ]
                }
            },
            "four": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_4',
                            rect: ['0px', '0px', '285px', '70px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/4.png', '0px', '0px']
                        },
                        {
                            id: 'hotspot',
                            rect: ['0px', '0', '285', '70', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'hotspot'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '285px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    labels: {
                        "on": 0,
                        "out": 1000
                    },
                    data: [
                        [
                            "eid212",
                            "left",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '210px'
                        ],
                        [
                            "eid213",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${hotspot}",
                            '210px',
                            '0px'
                        ],
                        [
                            "eid107",
                            "left",
                            0,
                            250,
                            "linear",
                            "${_4}",
                            '0px',
                            '210px'
                        ],
                        [
                            "eid112",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${_4}",
                            '210px',
                            '0px'
                        ]
                    ]
                }
            },
            "five": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_5',
                            rect: ['0px', '0px', '285px', '70px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/5.png', '0px', '0px']
                        },
                        {
                            id: 'hotspot',
                            rect: ['0px', '0', '285', '70', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'hotspot'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '285px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    labels: {
                        "on": 0,
                        "out": 1000
                    },
                    data: [
                        [
                            "eid115",
                            "left",
                            0,
                            250,
                            "linear",
                            "${_5}",
                            '0px',
                            '210px'
                        ],
                        [
                            "eid120",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${_5}",
                            '210px',
                            '0px'
                        ],
                        [
                            "eid214",
                            "left",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '210px'
                        ],
                        [
                            "eid215",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${hotspot}",
                            '210px',
                            '0px'
                        ]
                    ]
                }
            },
            "my_profile": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-43px', '-22px', '220px', '70px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(65,161,195,1.00)']
                        },
                        {
                            rect: ['-16px', '-1px', '166px', '27px', 'auto', 'auto'],
                            font: ['Roboto', [22, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">ЗА ПРОЕКТА</span></p>',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            rect: ['-43px', '-22px', '220px', '70px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '166px', '27px']
                        }
                    }
                },
                timeline: {
                    duration: 660,
                    autoPlay: false,
                    labels: {
                        "on": 0,
                        "out": 500
                    },
                    data: [
                        [
                            "eid218",
                            "opacity",
                            0,
                            160,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid222",
                            "opacity",
                            500,
                            160,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "certificates": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-32px', '-22px', '198px', '70px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(65,161,195,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['-16px', '-1px', '166px', '27px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">СЕРТИФИКАТИ</span></p>',
                            id: 'Text6Copy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['-32px', '-22px', '198px', '70px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '166px', '27px']
                        }
                    }
                },
                timeline: {
                    duration: 660,
                    autoPlay: false,
                    labels: {
                        "on": 0,
                        "out": 500
                    },
                    data: [
                        [
                            "eid223",
                            "opacity",
                            0,
                            160,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid224",
                            "opacity",
                            500,
                            160,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "help": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-53px', '-22px', '204px', '70px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(65,161,195,1.00)']
                        },
                        {
                            rect: ['5px', '-1px', '87px', '27px', 'auto', 'auto'],
                            font: ['Roboto', [22, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text6Copy2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">ПОМОЩ</span></p>',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            rect: ['-53px', '-22px', '204px', '70px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '27px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "on": 0,
                        "out": 340
                    },
                    data: [
                        [
                            "eid225",
                            "opacity",
                            0,
                            160,
                            "linear",
                            "${RectangleCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid226",
                            "opacity",
                            340,
                            160,
                            "linear",
                            "${RectangleCopy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "exit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-71px', '-22px', '215px', '70px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(65,161,195,1.00)']
                        },
                        {
                            rect: ['-7px', '-1px', '87px', '27px', 'auto', 'auto'],
                            font: ['Roboto', [22, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text6Copy3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">ЗА МЕН</span></p>',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            rect: ['-71px', '-22px', '215px', '70px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '27px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "on": 0,
                        "out": 340
                    },
                    data: [
                        [
                            "eid227",
                            "opacity",
                            0,
                            160,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid228",
                            "opacity",
                            340,
                            160,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "athome": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '285px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "hotspot": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '70px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '285px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    labels: {
                        "on": 0,
                        "out": 1000
                    },
                    data: [
                        [
                            "eid187",
                            "left",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '210px'
                        ],
                        [
                            "eid188",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${hotspot}",
                            '210px',
                            '0px'
                        ]
                    ]
                }
            },
            "fisrt_pin": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'first',
                            type: 'image',
                            rect: ['0px', '0px', '59px', '91px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/first.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "second": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'second',
                            type: 'image',
                            rect: ['0px', '0px', '59px', '91px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/second.png', '0px', '0px']
                        },
                        {
                            rect: ['-113px', '0px', '285', '70', 'auto', 'auto'],
                            id: 'hotspot',
                            symbolName: 'hotspot',
                            type: 'rect',
                            transform: [[], [], [], ['0.20702', '1.1022']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "on": 0
                    },
                    data: [
                        [
                            "eid414",
                            "height",
                            0,
                            250,
                            "linear",
                            "${second}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid415",
                            "height",
                            250,
                            250,
                            "linear",
                            "${second}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid416",
                            "height",
                            500,
                            250,
                            "linear",
                            "${second}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid417",
                            "height",
                            750,
                            250,
                            "linear",
                            "${second}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid492",
                            "height",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid493",
                            "height",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid494",
                            "height",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid495",
                            "height",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid418",
                            "top",
                            0,
                            250,
                            "linear",
                            "${second}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid419",
                            "top",
                            250,
                            250,
                            "linear",
                            "${second}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid420",
                            "top",
                            500,
                            250,
                            "linear",
                            "${second}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid421",
                            "top",
                            750,
                            250,
                            "linear",
                            "${second}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid488",
                            "top",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid489",
                            "top",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid490",
                            "top",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid491",
                            "top",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '38px',
                            '0px'
                        ]
                    ]
                }
            },
            "third_pin": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'third',
                            type: 'image',
                            rect: ['0px', '0px', '59px', '91px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/third.png', '0px', '0px']
                        },
                        {
                            rect: ['-113px', '0px', '285', '70', 'auto', 'auto'],
                            id: 'hotspot',
                            symbolName: 'hotspot',
                            type: 'rect',
                            transform: [[], [], [], ['0.20702', '1.1022']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "on": 0
                    },
                    data: [
                        [
                            "eid496",
                            "top",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid497",
                            "top",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid498",
                            "top",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid499",
                            "top",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid422",
                            "height",
                            0,
                            250,
                            "linear",
                            "${third}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid423",
                            "height",
                            250,
                            250,
                            "linear",
                            "${third}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid424",
                            "height",
                            500,
                            250,
                            "linear",
                            "${third}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid425",
                            "height",
                            750,
                            250,
                            "linear",
                            "${third}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid426",
                            "top",
                            0,
                            250,
                            "linear",
                            "${third}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid427",
                            "top",
                            250,
                            250,
                            "linear",
                            "${third}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid428",
                            "top",
                            500,
                            250,
                            "linear",
                            "${third}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid429",
                            "top",
                            750,
                            250,
                            "linear",
                            "${third}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid500",
                            "height",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid501",
                            "height",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid502",
                            "height",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid503",
                            "height",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ]
                    ]
                }
            },
            "first_pin": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'first',
                            rect: ['0px', '0px', '59px', '91px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/first.png', '0px', '0px']
                        },
                        {
                            rect: ['-113px', '0px', '285', '70', 'auto', 'auto'],
                            id: 'hotspot',
                            symbolName: 'hotspot',
                            type: 'rect',
                            transform: [[], [], [], ['0.20702', '1.1022']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "on": 0
                    },
                    data: [
                        [
                            "eid326",
                            "height",
                            0,
                            250,
                            "linear",
                            "${first}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid327",
                            "height",
                            250,
                            250,
                            "linear",
                            "${first}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid412",
                            "height",
                            500,
                            250,
                            "linear",
                            "${first}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid413",
                            "height",
                            750,
                            250,
                            "linear",
                            "${first}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid476",
                            "top",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid477",
                            "top",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid478",
                            "top",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid479",
                            "top",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid472",
                            "height",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid473",
                            "height",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid474",
                            "height",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid475",
                            "height",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid329",
                            "top",
                            0,
                            250,
                            "linear",
                            "${first}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid330",
                            "top",
                            250,
                            250,
                            "linear",
                            "${first}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid331",
                            "top",
                            500,
                            250,
                            "linear",
                            "${first}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid332",
                            "top",
                            750,
                            250,
                            "linear",
                            "${first}",
                            '38px',
                            '0px'
                        ]
                    ]
                }
            },
            "fourth": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fourth',
                            type: 'image',
                            rect: ['0px', '0px', '59px', '91px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fourth.png', '0px', '0px']
                        },
                        {
                            rect: ['-113px', '0px', '285', '70', 'auto', 'auto'],
                            id: 'hotspot',
                            symbolName: 'hotspot',
                            type: 'rect',
                            transform: [[], [], [], ['0.20702', '1.1022']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "on": 0
                    },
                    data: [
                        [
                            "eid508",
                            "height",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid509",
                            "height",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid510",
                            "height",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid511",
                            "height",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid430",
                            "height",
                            0,
                            250,
                            "linear",
                            "${fourth}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid431",
                            "height",
                            250,
                            250,
                            "linear",
                            "${fourth}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid432",
                            "height",
                            500,
                            250,
                            "linear",
                            "${fourth}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid433",
                            "height",
                            750,
                            250,
                            "linear",
                            "${fourth}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid504",
                            "top",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid505",
                            "top",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid506",
                            "top",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid507",
                            "top",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid434",
                            "top",
                            0,
                            250,
                            "linear",
                            "${fourth}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid435",
                            "top",
                            250,
                            250,
                            "linear",
                            "${fourth}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid436",
                            "top",
                            500,
                            250,
                            "linear",
                            "${fourth}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid437",
                            "top",
                            750,
                            250,
                            "linear",
                            "${fourth}",
                            '38px',
                            '0px'
                        ]
                    ]
                }
            },
            "first2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'first2',
                            rect: ['0px', '0px', '59px', '91px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/first.png', '0px', '0px']
                        },
                        {
                            rect: ['-113px', '0px', '285', '70', 'auto', 'auto'],
                            id: 'hotspot',
                            symbolName: 'hotspot',
                            type: 'rect',
                            transform: [[], [], [], ['0.20702', '1.1022']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "on": 0
                    },
                    data: [
                        [
                            "eid512",
                            "top",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid513",
                            "top",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid514",
                            "top",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid515",
                            "top",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid438",
                            "height",
                            0,
                            250,
                            "linear",
                            "${first2}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid439",
                            "height",
                            250,
                            250,
                            "linear",
                            "${first2}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid440",
                            "height",
                            500,
                            250,
                            "linear",
                            "${first2}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid441",
                            "height",
                            750,
                            250,
                            "linear",
                            "${first2}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid442",
                            "top",
                            0,
                            250,
                            "linear",
                            "${first2}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid443",
                            "top",
                            250,
                            250,
                            "linear",
                            "${first2}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid444",
                            "top",
                            500,
                            250,
                            "linear",
                            "${first2}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid445",
                            "top",
                            750,
                            250,
                            "linear",
                            "${first2}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid516",
                            "height",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid517",
                            "height",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid518",
                            "height",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid519",
                            "height",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ]
                    ]
                }
            },
            "second2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'second4',
                            rect: ['0px', '0px', '59px', '91px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/second.png', '0px', '0px']
                        },
                        {
                            rect: ['-113px', '0px', '285', '70', 'auto', 'auto'],
                            id: 'hotspot',
                            symbolName: 'hotspot',
                            type: 'rect',
                            transform: [[], [], [], ['0.20702', '1.1022']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "on": 0
                    },
                    data: [
                        [
                            "eid450",
                            "top",
                            0,
                            250,
                            "linear",
                            "${second4}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid451",
                            "top",
                            250,
                            250,
                            "linear",
                            "${second4}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid452",
                            "top",
                            500,
                            250,
                            "linear",
                            "${second4}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid453",
                            "top",
                            750,
                            250,
                            "linear",
                            "${second4}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid520",
                            "top",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid521",
                            "top",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid522",
                            "top",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid523",
                            "top",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid446",
                            "height",
                            0,
                            250,
                            "linear",
                            "${second4}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid447",
                            "height",
                            250,
                            250,
                            "linear",
                            "${second4}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid448",
                            "height",
                            500,
                            250,
                            "linear",
                            "${second4}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid449",
                            "height",
                            750,
                            250,
                            "linear",
                            "${second4}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid524",
                            "height",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid525",
                            "height",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid526",
                            "height",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid527",
                            "height",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ]
                    ]
                }
            },
            "third2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'third2',
                            rect: ['0px', '0px', '59px', '91px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/third.png', '0px', '0px']
                        },
                        {
                            rect: ['-113px', '0px', '285', '70', 'auto', 'auto'],
                            id: 'hotspot',
                            symbolName: 'hotspot',
                            type: 'rect',
                            transform: [[], [], [], ['0.20702', '1.1022']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "on": 0
                    },
                    data: [
                        [
                            "eid458",
                            "top",
                            0,
                            250,
                            "linear",
                            "${third2}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid459",
                            "top",
                            250,
                            250,
                            "linear",
                            "${third2}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid460",
                            "top",
                            500,
                            250,
                            "linear",
                            "${third2}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid461",
                            "top",
                            750,
                            250,
                            "linear",
                            "${third2}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid528",
                            "top",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid529",
                            "top",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid530",
                            "top",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid531",
                            "top",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid454",
                            "height",
                            0,
                            250,
                            "linear",
                            "${third2}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid455",
                            "height",
                            250,
                            250,
                            "linear",
                            "${third2}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid456",
                            "height",
                            500,
                            250,
                            "linear",
                            "${third2}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid457",
                            "height",
                            750,
                            250,
                            "linear",
                            "${third2}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid532",
                            "height",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid533",
                            "height",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid534",
                            "height",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid535",
                            "height",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ]
                    ]
                }
            },
            "fourth2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fourth2',
                            type: 'image',
                            rect: ['0px', '0px', '59px', '91px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fourth.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'hotspot',
                            symbolName: 'hotspot',
                            transform: [[], [], [], ['0.20702', '1.1022']],
                            rect: ['-113px', '0px', '285', '70', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "on": 0
                    },
                    data: [
                        [
                            "eid540",
                            "height",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid541",
                            "height",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid542",
                            "height",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid543",
                            "height",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid462",
                            "height",
                            0,
                            250,
                            "linear",
                            "${fourth2}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid463",
                            "height",
                            250,
                            250,
                            "linear",
                            "${fourth2}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid464",
                            "height",
                            500,
                            250,
                            "linear",
                            "${fourth2}",
                            '91px',
                            '70px'
                        ],
                        [
                            "eid465",
                            "height",
                            750,
                            250,
                            "linear",
                            "${fourth2}",
                            '70px',
                            '91px'
                        ],
                        [
                            "eid466",
                            "top",
                            0,
                            250,
                            "linear",
                            "${fourth2}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid467",
                            "top",
                            250,
                            250,
                            "linear",
                            "${fourth2}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid468",
                            "top",
                            500,
                            250,
                            "linear",
                            "${fourth2}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid469",
                            "top",
                            750,
                            250,
                            "linear",
                            "${fourth2}",
                            '38px',
                            '0px'
                        ],
                        [
                            "eid536",
                            "top",
                            0,
                            250,
                            "linear",
                            "${hotspot}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid537",
                            "top",
                            250,
                            250,
                            "linear",
                            "${hotspot}",
                            '20px',
                            '-40px'
                        ],
                        [
                            "eid538",
                            "top",
                            500,
                            250,
                            "linear",
                            "${hotspot}",
                            '-40px',
                            '38px'
                        ],
                        [
                            "eid539",
                            "top",
                            750,
                            250,
                            "linear",
                            "${hotspot}",
                            '38px',
                            '0px'
                        ]
                    ]
                }
            },
            "btn_info_game": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'info-button-game1',
                            rect: ['0px', '0px', '42px', '42px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/info-button-game.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            opacity: '0',
                            rect: ['0', '-46px', '141', '35', 'auto', 'auto'],
                            c: [
                            {
                                id: 'info-dialog-game',
                                rect: ['-245px', '-53px', '310px', '88px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/info-dialog-game.png', '0px', '0px']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text5',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Ще му дадеш исканата информация.</span></p>',
                                type: 'text',
                                rect: ['-238px', '-46px', '310px', '52px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '42px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '42px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    labels: {
                        "click": 0
                    },
                    data: [
                        [
                            "eid546",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid550",
                            "opacity",
                            7500,
                            500,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_info_game1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'info-button-game2',
                            opacity: '1',
                            rect: ['0px', '0px', '42px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-button-game.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group2',
                            opacity: '0',
                            rect: ['-247', '-99', '316', '88', 'auto', 'auto'],
                            c: [
                            {
                                id: 'info-dialog-game',
                                rect: ['0px', '0px', '310px', '88px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/info-dialog-game.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['6px', '6px', '310px', '69px', 'auto', 'auto'],
                                align: 'left',
                                id: 'Text7Copy4',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Ще му затвориш и ще по-звъниш на родителите си.</p>',
                                font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '42px', 'auto', 'auto'],
                            id: 'hotspot2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '42px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    labels: {
                        "click": 0
                    },
                    data: [
                        [
                            "eid1259",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Group2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1258",
                            "opacity",
                            7500,
                            500,
                            "linear",
                            "${Group2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_game_info3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'info-button-game3',
                            rect: ['0px', '0px', '42px', '42px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/info-button-game.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            opacity: '0',
                            rect: ['-247', '-96', '312', '88', 'auto', 'auto'],
                            c: [
                            {
                                id: 'info-dialog-game',
                                rect: ['0px', '0px', '310px', '88px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/info-dialog-game.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                id: 'Text5Copy2',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Ще му кажеш къде родите-лите ти съхраняват пари.</span></p>',
                                rect: ['2px', '7px', '310px', '68px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '42px', 'auto', 'auto'],
                            id: 'hotspot3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '42px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    labels: {
                        "click": 0
                    },
                    data: [
                        [
                            "eid1244",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1247",
                            "opacity",
                            7500,
                            500,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_skip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'skip',
                            rect: ['0px', '0px', '196px', '46px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/skip.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '8px', '149px', '25px', 'auto', 'auto'],
                            font: ['Roboto', [24, 'px'], 'rgba(255,255,255,1.00)', '300', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 20px;\">ВЪРНИ СЕ</span></p>',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '42px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '196px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn_check": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'check',
                            type: 'image',
                            rect: ['0px', '0px', '177px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                        },
                        {
                            font: ['Roboto', [20, 'px'], 'rgba(255,255,255,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text7',
                            text: '<p style=\"margin: 0px;\">​ПРОДЪЛЖИ</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['5px', '12px', '121px', '27px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '42px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '177px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "game1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1357px', '0px', '1365', '768', 'auto', 'auto'],
                            id: 'Group7',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '1363px', '768px', 'auto', 'auto'],
                                opacity: '1',
                                id: 'Background',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(236,240,241,1.00)']
                            },
                            {
                                type: 'image',
                                id: 'wrong-icon',
                                opacity: '0',
                                rect: ['122px', '323px', '272px', '277px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/wrong-icon.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'check-icon',
                                opacity: '0',
                                rect: ['982px', '323px', '272px', '277px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/check-icon.png', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                id: 'answer1q1',
                                symbolName: 'answer1',
                                rect: ['132px', '335', '250', '250', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'answer2q1',
                                symbolName: 'answer2',
                                rect: ['563px', '335', '250', '250', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                type: 'rect',
                                id: 'answer3q1',
                                symbolName: 'answer3',
                                rect: ['993px', '335', '250', '250', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                type: 'rect',
                                id: 'answer1q2',
                                symbolName: 'answer1',
                                rect: ['1879px', '335', '250', '250', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                type: 'rect',
                                id: 'answer2q2',
                                symbolName: 'answer2',
                                rect: ['1809px', '335', '250', '250', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                type: 'rect',
                                id: 'answer3q2',
                                symbolName: 'answer3',
                                rect: ['2239px', '335px', '250', '250', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                type: 'rect',
                                id: 'answer1q3',
                                symbolName: 'answer1',
                                rect: ['133px', '335', '250', '250', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'answer2q3',
                                symbolName: 'answer2',
                                rect: ['563px', '335', '250', '250', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'answer3q3',
                                symbolName: 'answer3',
                                rect: ['993px', '335px', '250', '250', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'answer1q4',
                                symbolName: 'answer1',
                                rect: ['133px', '335', '250', '250', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'answer2q4',
                                symbolName: 'answer2',
                                rect: ['563px', '335', '250', '250', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'answer3q4',
                                symbolName: 'answer3',
                                rect: ['993px', '335px', '250', '250', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                rect: ['133px', '217px', '1103px', '80px', 'auto', 'auto'],
                                font: ['Roboto', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Question',
                                opacity: '1',
                                align: 'center',
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(52, 73, 94); font-size: 30px; font-weight: 500;\">Как ще постъпиш ако непознат поиска лична информация или пари по телефона?</span></p>'
                            },
                            {
                                rect: ['122px', '187px', '1121px', '119px', 'auto', 'auto'],
                                font: ['Roboto', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Question2',
                                opacity: '0',
                                align: 'center',
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(52, 73, 94); font-size: 30px; font-weight: 500;\">Често в банята се съхраняват опасни вещества (белина) в цветни опаковки, които привличат вниманието на детето. Какво ще направиш ако такова вещество попадне в очите или по ръцете?</span></p>'
                            },
                            {
                                rect: ['133px', '217px', '1110px', '80px', 'auto', 'auto'],
                                font: ['Roboto', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Question3',
                                opacity: '0',
                                align: 'center',
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(52, 73, 94); font-size: 30px; font-weight: 500;\">За да си приготвиш нещо за хапване използваш електроуреди (грил, тостер). Как ще постъпиш ако се изгориш на някой от тях (електроуредите)?</span></p>'
                            },
                            {
                                rect: ['133px', '217px', '1110px', '80px', 'auto', 'auto'],
                                font: ['Roboto', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Question4',
                                opacity: '0',
                                align: 'center',
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(52, 73, 94); font-size: 30px; font-weight: 500;\">Подът в холът може да е хлъзгав и лесно може да паднеш. Какво ще направиш ако се нараниш?</span></p>'
                            },
                            {
                                rect: ['303px', '94px', '80px', '80px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                opacity: '1',
                                id: 'Ellipse1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(192,192,192,0)', [270, [['rgba(60,159,193,1.00)', 100], ['rgba(255,255,255,1.00)', 100]]]]
                            },
                            {
                                rect: ['383px', '132px', '150px', '3px', 'auto', 'auto'],
                                opacity: '1',
                                id: 'Progress1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(133,208,234,1.00)']
                            },
                            {
                                rect: ['303px', '106px', '80px', '50px', 'auto', 'auto'],
                                font: ['Roboto', [45, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'FirstText',
                                opacity: '1',
                                align: 'center',
                                text: '<p style=\"margin: 0px;\">​1</p>'
                            },
                            {
                                rect: ['533px', '94px', '80px', '80px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                opacity: '1',
                                id: 'Ellipse2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(192,192,192,0)', [270, [['rgba(82,194,233,1.00)', 100], ['rgba(255,255,255,1.00)', 100]]]]
                            },
                            {
                                rect: ['613px', '132px', '150px', '3px', 'auto', 'auto'],
                                opacity: '1',
                                id: 'Progress2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(133,208,234,1.00)']
                            },
                            {
                                rect: ['533px', '106px', '80px', '50px', 'auto', 'auto'],
                                font: ['Roboto', [45, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'SecondText',
                                opacity: '1',
                                align: 'center',
                                text: '<p style=\"margin: 0px;\">​2</p>'
                            },
                            {
                                rect: ['763px', '94px', '80px', '80px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                opacity: '1',
                                id: 'Ellipse3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(192,192,192,0)', [270, [['rgba(82,194,233,1.00)', 100], ['rgba(255,255,255,1.00)', 100]]]]
                            },
                            {
                                rect: ['843px', '132px', '150px', '3px', 'auto', 'auto'],
                                opacity: '1',
                                id: 'Progress3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(133,208,234,1)']
                            },
                            {
                                rect: ['763px', '106px', '80px', '50px', 'auto', 'auto'],
                                font: ['Roboto', [45, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'ThirdText',
                                opacity: '1',
                                align: 'center',
                                text: '<p style=\"margin: 0px;\">​3</p>'
                            },
                            {
                                rect: ['993px', '94px', '80px', '80px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                opacity: '1',
                                id: 'Ellipse4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(192,192,192,0)', [270, [['rgba(82,194,233,1.00)', 100], ['rgba(255,255,255,1.00)', 100]]]]
                            },
                            {
                                rect: ['993px', '106px', '80px', '50px', 'auto', 'auto'],
                                font: ['Roboto', [45, 'px'], 'rgba(255,255,255,1)', '500', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'FourthText',
                                opacity: '1',
                                align: 'center',
                                text: '<p style=\"margin: 0px;\">​4</p>'
                            },
                            {
                                type: 'rect',
                                id: 'btn_game_info2q1',
                                symbolName: 'btn_info_game1',
                                rect: ['736px', '335px', '42', '42', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'btn_game_info1q1',
                                symbolName: 'btn_info_game',
                                rect: ['304px', '335px', '42', '42', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'btn_game_info3q1',
                                symbolName: 'btn_game_info3',
                                rect: ['1166px', '335px', '42', '42', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'btn_skip',
                                symbolName: 'btn_skip',
                                rect: ['465px', '660px', '196', '46', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'btn_next4',
                                symbolName: 'btn_skip_1',
                                rect: ['745px', '660px', '196', '46', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                type: 'rect',
                                id: 'btn_next3',
                                symbolName: 'btn_skip_1',
                                rect: ['465px', '660px', '196', '46', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                type: 'rect',
                                id: 'btn_next2',
                                symbolName: 'btn_skip_2',
                                rect: ['1909px', '660px', '196', '46', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'btn_next',
                                symbolName: 'btn_skip_1',
                                rect: ['745px', '660px', '196', '46', 'auto', 'auto'],
                                opacity: '1'
                            },
                            {
                                type: 'rect',
                                id: 'Progress_Animation1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['383px', '132px', '0px', '3px', 'auto', 'auto'],
                                fill: ['rgba(60,159,193,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'Progress_Animation2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['613px', '132px', '0px', '3px', 'auto', 'auto'],
                                fill: ['rgba(60,159,193,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'Progress_Animation3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['843px', '132px', '0px', '3px', 'auto', 'auto'],
                                fill: ['rgba(60,159,193,1.00)']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '1363', '768', 'auto', 'auto'],
                            id: 'Group8',
                            type: 'group',
                            c: [
                            {
                                id: 'level1',
                                rect: ['0px', '0px', '1363px', '768px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/level1.png', '0px', '0px']
                            },
                            {
                                id: 'third',
                                rect: ['513px', '509px', '59', '91', 'auto', 'auto'],
                                symbolName: 'third_pin',
                                type: 'rect'
                            },
                            {
                                id: 'second',
                                rect: ['804px', '343px', '59', '91', 'auto', 'auto'],
                                symbolName: 'second',
                                type: 'rect'
                            },
                            {
                                id: 'first',
                                rect: ['789px', '169px', '59', '91', 'auto', 'auto'],
                                symbolName: 'first_pin',
                                type: 'rect'
                            },
                            {
                                id: 'fourth',
                                rect: ['775px', '494px', '59', '91', 'auto', 'auto'],
                                symbolName: 'fourth',
                                type: 'rect'
                            }]
                        },
                        {
                            rect: ['-326px', '-306px', '326px', '50px', 'auto', 'auto'],
                            font: ['Roboto', [35, 'px'], 'rgba(52,73,94,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text5',
                            opacity: '0',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-weight: 500; font-size: 35px;\">Ти завърши теста!</span></p>'
                        },
                        {
                            rect: ['-326px', '-203px', '242px', '183px', 'auto', 'auto'],
                            font: ['Roboto', [35, 'px'], 'rgba(52,73,94,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text6',
                            opacity: '0',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 100; font-size: 159px;\">0%</span></p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '196px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 8307,
                    autoPlay: false,
                    labels: {
                        "start": 0,
                        "true": 1000,
                        "wrong": 1250,
                        "wrong2": 1500,
                        "next": 1750,
                        "true2": 2750,
                        "wrong3": 3000,
                        "wrong4": 3235,
                        "next2": 3750,
                        "true3": 4750,
                        "wrong5": 5000,
                        "wrong6": 5241,
                        "next3": 5500,
                        "true4": 6500,
                        "wrong7": 6750,
                        "wrong8": 7000,
                        "finish": 7307
                    },
                    data: [
                        [
                            "eid887",
                            "opacity",
                            1250,
                            195,
                            "linear",
                            "${wrong-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1141",
                            "opacity",
                            1445,
                            40,
                            "linear",
                            "${wrong-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1142",
                            "opacity",
                            1485,
                            210,
                            "linear",
                            "${wrong-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1143",
                            "opacity",
                            1745,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid923",
                            "opacity",
                            3000,
                            195,
                            "linear",
                            "${wrong-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid924",
                            "opacity",
                            3235,
                            210,
                            "linear",
                            "${wrong-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid930",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid979",
                            "opacity",
                            5000,
                            195,
                            "linear",
                            "${wrong-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid978",
                            "opacity",
                            5241,
                            210,
                            "linear",
                            "${wrong-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid995",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid988",
                            "opacity",
                            6750,
                            195,
                            "linear",
                            "${wrong-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid989",
                            "opacity",
                            6991,
                            210,
                            "linear",
                            "${wrong-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid997",
                            "opacity",
                            7250,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid619",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            [270,[['rgba(82,194,233,1.00)',100],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(82,194,233,1.00)',100],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid620",
                            "background-image",
                            2750,
                            0,
                            "linear",
                            "${Ellipse2}",
                            [270,[['rgba(82,194,233,1.00)',100],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(60,159,193,1.00)',100],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid1204",
                            "left",
                            0,
                            0,
                            "linear",
                            "${answer1q4}",
                            '1421px',
                            '1421px'
                        ],
                        [
                            "eid1205",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer1q4}",
                            '1421px',
                            '1379px'
                        ],
                        [
                            "eid1206",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${answer1q4}",
                            '1379px',
                            '1500px'
                        ],
                        [
                            "eid1207",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${answer1q4}",
                            '1500px',
                            '1500px'
                        ],
                        [
                            "eid1218",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${answer1q4}",
                            '1500px',
                            '1373px'
                        ],
                        [
                            "eid1209",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${answer1q4}",
                            '1373px',
                            '133px'
                        ],
                        [
                            "eid961",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer1q1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid952",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer1q1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid974",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer1q2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid975",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer1q2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1146",
                            "opacity",
                            3745,
                            0,
                            "linear",
                            "${answer1q2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1138",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${answer1q2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid944",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Question4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid939",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${Question4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1097",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${btn_next3}",
                            '745px',
                            '745px'
                        ],
                        [
                            "eid1100",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${btn_next3}",
                            '745px',
                            '1909px'
                        ],
                        [
                            "eid680",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${FourthText}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1170",
                            "left",
                            0,
                            0,
                            "linear",
                            "${answer1q3}",
                            '1421px',
                            '1421px'
                        ],
                        [
                            "eid1171",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer1q3}",
                            '1421px',
                            '1379px'
                        ],
                        [
                            "eid1172",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${answer1q3}",
                            '1379px',
                            '1500px'
                        ],
                        [
                            "eid1173",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${answer1q3}",
                            '1500px',
                            '1500px'
                        ],
                        [
                            "eid1174",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${answer1q3}",
                            '133px',
                            '133px'
                        ],
                        [
                            "eid1175",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${answer1q3}",
                            '1373px',
                            '1879px'
                        ],
                        [
                            "eid1096",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${btn_next3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1099",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${btn_next3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid628",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btn_skip}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid957",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${btn_game_info1q1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid955",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${btn_game_info1q1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid678",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${btn_game_info1q1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1056",
                            "opacity",
                            1695,
                            0,
                            "linear",
                            "${btn_next}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1057",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${btn_next}",
                            '1',
                            '0'
                        ],
                        [
                            "eid823",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '-326px',
                            '-326px'
                        ],
                        [
                            "eid825",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${Text6}",
                            '-326px',
                            '705px'
                        ],
                        [
                            "eid779",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${btn_game_info2q1}",
                            '736px',
                            '736px'
                        ],
                        [
                            "eid798",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${btn_game_info2q1}",
                            '736px',
                            '736px'
                        ],
                        [
                            "eid1194",
                            "left",
                            0,
                            0,
                            "linear",
                            "${answer2q4}",
                            '1851px',
                            '1851px'
                        ],
                        [
                            "eid1195",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer2q4}",
                            '1851px',
                            '1809px'
                        ],
                        [
                            "eid1196",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${answer2q4}",
                            '1809px',
                            '1500px'
                        ],
                        [
                            "eid1197",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${answer2q4}",
                            '1500px',
                            '1500px'
                        ],
                        [
                            "eid1216",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${answer2q4}",
                            '1500px',
                            '1803px'
                        ],
                        [
                            "eid1199",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${answer2q4}",
                            '1803px',
                            '563px'
                        ],
                        [
                            "eid623",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Ellipse3}",
                            [270,[['rgba(82,194,233,1.00)',100],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(82,194,233,1.00)',100],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid624",
                            "background-image",
                            4750,
                            0,
                            "linear",
                            "${Ellipse3}",
                            [270,[['rgba(82,194,233,1.00)',100],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(60,159,193,1.00)',100],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid824",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            '-326px',
                            '-326px'
                        ],
                        [
                            "eid827",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${Text5}",
                            '-326px',
                            '690px'
                        ],
                        [
                            "eid1210",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer1q4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1211",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer1q4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1219",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${answer1q4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1213",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${answer1q4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1084",
                            "left",
                            1695,
                            0,
                            "linear",
                            "${btn_next}",
                            '745px',
                            '745px'
                        ],
                        [
                            "eid1085",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${btn_next}",
                            '745px',
                            '1909px'
                        ],
                        [
                            "eid789",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer3q1}",
                            '993px',
                            '993px'
                        ],
                        [
                            "eid801",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${answer3q1}",
                            '993px',
                            '993px'
                        ],
                        [
                            "eid602",
                            "width",
                            1750,
                            1000,
                            "linear",
                            "${Progress_Animation1}",
                            '0px',
                            '150px'
                        ],
                        [
                            "eid1012",
                            "left",
                            0,
                            0,
                            "linear",
                            "${answer1q2}",
                            '1421px',
                            '1421px'
                        ],
                        [
                            "eid972",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer1q2}",
                            '133px',
                            '1379px'
                        ],
                        [
                            "eid1015",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${answer1q2}",
                            '1379px',
                            '133px'
                        ],
                        [
                            "eid1003",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${answer1q2}",
                            '133px',
                            '133px'
                        ],
                        [
                            "eid1149",
                            "left",
                            3745,
                            0,
                            "linear",
                            "${answer1q2}",
                            '133px',
                            '1373px'
                        ],
                        [
                            "eid973",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${answer1q2}",
                            '1373px',
                            '1879px'
                        ],
                        [
                            "eid1078",
                            "left",
                            2695,
                            0,
                            "linear",
                            "${btn_next4}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid1182",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${btn_next4}",
                            '465px',
                            '745px'
                        ],
                        [
                            "eid821",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid826",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${Text6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1190",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer3q4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1191",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer3q4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1215",
                            "opacity",
                            3755,
                            0,
                            "linear",
                            "${answer3q4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1193",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${answer3q4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1095",
                            "top",
                            3750,
                            0,
                            "linear",
                            "${btn_next3}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid1098",
                            "top",
                            5500,
                            0,
                            "linear",
                            "${btn_next3}",
                            '660px',
                            '780px'
                        ],
                        [
                            "eid576",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Group8}",
                            '0px',
                            '-1361px'
                        ],
                        [
                            "eid585",
                            "left",
                            7307,
                            1000,
                            "linear",
                            "${Group8}",
                            '-1361px',
                            '0px'
                        ],
                        [
                            "eid784",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${btn_game_info3q1}",
                            '1166px',
                            '1166px'
                        ],
                        [
                            "eid796",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${btn_game_info3q1}",
                            '1166px',
                            '1166px'
                        ],
                        [
                            "eid1200",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer2q4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1201",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer2q4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1217",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${answer2q4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1203",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${answer2q4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1080",
                            "opacity",
                            1695,
                            0,
                            "linear",
                            "${btn_next4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1081",
                            "opacity",
                            5195,
                            0,
                            "linear",
                            "${btn_next4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1183",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${btn_next4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid687",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1010",
                            "left",
                            0,
                            0,
                            "linear",
                            "${answer3q2}",
                            '2281px',
                            '2281px'
                        ],
                        [
                            "eid962",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer3q2}",
                            '993px',
                            '2239px'
                        ],
                        [
                            "eid1013",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${answer3q2}",
                            '2239px',
                            '993px'
                        ],
                        [
                            "eid1001",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${answer3q2}",
                            '993px',
                            '993px'
                        ],
                        [
                            "eid1147",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${answer3q2}",
                            '993px',
                            '2233px'
                        ],
                        [
                            "eid963",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${answer3q2}",
                            '2233px',
                            '2239px'
                        ],
                        [
                            "eid1156",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer3q3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1157",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer3q3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1158",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${answer3q3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1159",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${answer3q3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid964",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer3q2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid965",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer3q2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1144",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${answer3q2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid966",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${answer3q2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid958",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${btn_game_info2q1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid953",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${btn_game_info2q1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid679",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${btn_game_info2q1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid575",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Group7}",
                            '1357px',
                            '0px'
                        ],
                        [
                            "eid582",
                            "left",
                            7307,
                            1000,
                            "linear",
                            "${Group7}",
                            '0px',
                            '1363px'
                        ],
                        [
                            "eid685",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${SecondText}",
                            '1',
                            '1'
                        ],
                        [
                            "eid969",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer2q2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid970",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer2q2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1145",
                            "opacity",
                            3745,
                            0,
                            "linear",
                            "${answer2q2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid971",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${answer2q2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1184",
                            "left",
                            0,
                            0,
                            "linear",
                            "${answer3q4}",
                            '2281px',
                            '2281px'
                        ],
                        [
                            "eid1185",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer3q4}",
                            '2281px',
                            '2239px'
                        ],
                        [
                            "eid1186",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${answer3q4}",
                            '2239px',
                            '1500px'
                        ],
                        [
                            "eid1187",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${answer3q4}",
                            '1500px',
                            '1500px'
                        ],
                        [
                            "eid1214",
                            "left",
                            3755,
                            0,
                            "linear",
                            "${answer3q4}",
                            '1500px',
                            '2233px'
                        ],
                        [
                            "eid1189",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${answer3q4}",
                            '2233px',
                            '993px'
                        ],
                        [
                            "eid928",
                            "left",
                            1445,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '122px',
                            '122px'
                        ],
                        [
                            "eid929",
                            "left",
                            1485,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '122px',
                            '982px'
                        ],
                        [
                            "eid926",
                            "left",
                            3195,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '982px',
                            '982px'
                        ],
                        [
                            "eid927",
                            "left",
                            3235,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '982px',
                            '552px'
                        ],
                        [
                            "eid1180",
                            "left",
                            3445,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '552px',
                            '552px'
                        ],
                        [
                            "eid1181",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '552px',
                            '122px'
                        ],
                        [
                            "eid977",
                            "left",
                            5195,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '122px',
                            '122px'
                        ],
                        [
                            "eid976",
                            "left",
                            5241,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '122px',
                            '982px'
                        ],
                        [
                            "eid998",
                            "left",
                            6750,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '982px',
                            '552px'
                        ],
                        [
                            "eid986",
                            "left",
                            6945,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '552px',
                            '552px'
                        ],
                        [
                            "eid987",
                            "left",
                            6991,
                            0,
                            "linear",
                            "${wrong-icon}",
                            '122px',
                            '122px'
                        ],
                        [
                            "eid780",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${btn_game_info1q1}",
                            '304px',
                            '304px'
                        ],
                        [
                            "eid797",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${btn_game_info1q1}",
                            '304px',
                            '304px'
                        ],
                        [
                            "eid938",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${Question4}",
                            '133px',
                            '133px'
                        ],
                        [
                            "eid1150",
                            "left",
                            0,
                            0,
                            "linear",
                            "${answer3q3}",
                            '2281px',
                            '2281px'
                        ],
                        [
                            "eid1151",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer3q3}",
                            '2281px',
                            '2239px'
                        ],
                        [
                            "eid1152",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${answer3q3}",
                            '2239px',
                            '1500px'
                        ],
                        [
                            "eid1153",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${answer3q3}",
                            '1500px',
                            '1500px'
                        ],
                        [
                            "eid1154",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${answer3q3}",
                            '993px',
                            '993px'
                        ],
                        [
                            "eid1155",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${answer3q3}",
                            '2233px',
                            '2239px'
                        ],
                        [
                            "eid689",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${Progress1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1160",
                            "left",
                            0,
                            0,
                            "linear",
                            "${answer2q3}",
                            '1851px',
                            '1851px'
                        ],
                        [
                            "eid1161",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer2q3}",
                            '1851px',
                            '1809px'
                        ],
                        [
                            "eid1162",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${answer2q3}",
                            '1809px',
                            '1500px'
                        ],
                        [
                            "eid1163",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${answer2q3}",
                            '1500px',
                            '1500px'
                        ],
                        [
                            "eid1164",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${answer2q3}",
                            '563px',
                            '563px'
                        ],
                        [
                            "eid1165",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${answer2q3}",
                            '1803px',
                            '1809px'
                        ],
                        [
                            "eid932",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Question3}",
                            '133px',
                            '133px'
                        ],
                        [
                            "eid1166",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer2q3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1167",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer2q3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1168",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${answer2q3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1169",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${answer2q3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid945",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Question3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid933",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${Question3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid941",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${Question3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid936",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${Question3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid948",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${Question3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid688",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${FirstText}",
                            '1',
                            '1'
                        ],
                        [
                            "eid898",
                            "opacity",
                            1000,
                            150,
                            "linear",
                            "${check-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid899",
                            "opacity",
                            1250,
                            0,
                            "linear",
                            "${check-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid919",
                            "opacity",
                            2750,
                            175,
                            "linear",
                            "${check-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid917",
                            "opacity",
                            3000,
                            0,
                            "linear",
                            "${check-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid983",
                            "opacity",
                            4750,
                            150,
                            "linear",
                            "${check-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid984",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${check-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid991",
                            "opacity",
                            6500,
                            150,
                            "linear",
                            "${check-icon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid996",
                            "opacity",
                            6750,
                            0,
                            "linear",
                            "${check-icon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid956",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${btn_game_info3q1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid954",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${btn_game_info3q1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid677",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${btn_game_info3q1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid630",
                            "width",
                            5500,
                            1000,
                            "linear",
                            "${Progress_Animation3}",
                            '0px',
                            '150px'
                        ],
                        [
                            "eid686",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${Progress2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid788",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${btn_skip}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid791",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${btn_skip}",
                            '465px',
                            '465px'
                        ],
                        [
                            "eid682",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${ThirdText}",
                            '1',
                            '1'
                        ],
                        [
                            "eid634",
                            "background-image",
                            500,
                            0,
                            "linear",
                            "${Ellipse4}",
                            [270,[['rgba(82,194,233,1.00)',100],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(82,194,233,1.00)',100],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid635",
                            "background-image",
                            6500,
                            0,
                            "linear",
                            "${Ellipse4}",
                            [270,[['rgba(82,194,233,1.00)',100],['rgba(255,255,255,1.00)',100]]],
                            [270,[['rgba(60,159,193,1.00)',100],['rgba(255,255,255,1.00)',100]]]
                        ],
                        [
                            "eid1054",
                            "top",
                            1695,
                            0,
                            "linear",
                            "${btn_next}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid1055",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${btn_next}",
                            '660px',
                            '780px'
                        ],
                        [
                            "eid684",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${Ellipse3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1086",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btn_next2}",
                            '780px',
                            '780px'
                        ],
                        [
                            "eid1087",
                            "top",
                            1745,
                            0,
                            "linear",
                            "${btn_next2}",
                            '780px',
                            '660px'
                        ],
                        [
                            "eid1092",
                            "top",
                            3750,
                            0,
                            "linear",
                            "${btn_next2}",
                            '660px',
                            '780px'
                        ],
                        [
                            "eid1176",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer1q3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1177",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer1q3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1178",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${answer1q3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1179",
                            "opacity",
                            5500,
                            0,
                            "linear",
                            "${answer1q3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1090",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn_next2}",
                            '1909px',
                            '1909px'
                        ],
                        [
                            "eid1091",
                            "left",
                            1745,
                            0,
                            "linear",
                            "${btn_next2}",
                            '1909px',
                            '745px'
                        ],
                        [
                            "eid1094",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${btn_next2}",
                            '745px',
                            '1909px'
                        ],
                        [
                            "eid616",
                            "width",
                            3750,
                            1000,
                            "linear",
                            "${Progress_Animation2}",
                            '0px',
                            '150px'
                        ],
                        [
                            "eid905",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Question2}",
                            '122px',
                            '122px'
                        ],
                        [
                            "eid925",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${check-icon}",
                            '552px',
                            '552px'
                        ],
                        [
                            "eid918",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${check-icon}",
                            '552px',
                            '122px'
                        ],
                        [
                            "eid982",
                            "left",
                            4750,
                            0,
                            "linear",
                            "${check-icon}",
                            '122px',
                            '552px'
                        ],
                        [
                            "eid990",
                            "left",
                            6500,
                            0,
                            "linear",
                            "${check-icon}",
                            '552px',
                            '982px'
                        ],
                        [
                            "eid870",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${Question}",
                            '1',
                            '1'
                        ],
                        [
                            "eid904",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${Question}",
                            '0',
                            '0'
                        ],
                        [
                            "eid947",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${Question}",
                            '0',
                            '0'
                        ],
                        [
                            "eid822",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid828",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${Text5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid960",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer2q1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid951",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer2q1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid694",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${answer2q1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid683",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${Progress3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid782",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Question}",
                            '133px',
                            '133px'
                        ],
                        [
                            "eid1088",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${btn_next2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1089",
                            "opacity",
                            1745,
                            0,
                            "linear",
                            "${btn_next2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1093",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${btn_next2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid786",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer1q1}",
                            '133px',
                            '133px'
                        ],
                        [
                            "eid803",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${answer1q1}",
                            '133px',
                            '132px'
                        ],
                        [
                            "eid959",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${answer3q1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid950",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${answer3q1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid693",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${answer3q1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid946",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Question2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid906",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${Question2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid907",
                            "opacity",
                            1750,
                            0,
                            "linear",
                            "${Question2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid908",
                            "opacity",
                            2750,
                            0,
                            "linear",
                            "${Question2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid942",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${Question2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid937",
                            "opacity",
                            4750,
                            0,
                            "linear",
                            "${Question2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid949",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${Question2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1011",
                            "left",
                            0,
                            0,
                            "linear",
                            "${answer2q2}",
                            '1851px',
                            '1851px'
                        ],
                        [
                            "eid967",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer2q2}",
                            '563px',
                            '1809px'
                        ],
                        [
                            "eid1014",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${answer2q2}",
                            '1809px',
                            '563px'
                        ],
                        [
                            "eid1002",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${answer2q2}",
                            '563px',
                            '563px'
                        ],
                        [
                            "eid1148",
                            "left",
                            3745,
                            0,
                            "linear",
                            "${answer2q2}",
                            '563px',
                            '1803px'
                        ],
                        [
                            "eid968",
                            "left",
                            5500,
                            0,
                            "linear",
                            "${answer2q2}",
                            '1803px',
                            '1809px'
                        ],
                        [
                            "eid690",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${Ellipse1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid787",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${answer2q1}",
                            '563px',
                            '563px'
                        ],
                        [
                            "eid802",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${answer2q1}",
                            '563px',
                            '563px'
                        ]
                    ]
                }
            },
            "answer1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'answer1',
                            rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/answer.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '250px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "answer2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'answer2',
                            rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/answer.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '250px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "answer3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'answer3',
                            rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/answer.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '250px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "progress_animation1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['383px', '132px', '0px', '3px', 'auto', 'auto'],
                            id: 'Progress_Animation1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(60,159,193,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "skip": 0
                    },
                    data: [
                        [
                            "eid601",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${Progress_Animation1}",
                            '0px',
                            '150px'
                        ]
                    ]
                }
            },
            "btn_skip2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'skip',
                            type: 'image',
                            rect: ['0px', '0px', '196px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/skip.png', '0px', '0px']
                        },
                        {
                            font: ['Roboto', [24, 'px'], 'rgba(255,255,255,1.00)', '300', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text6',
                            text: '<p style=\"margin: 0px;\">​ПРОПУСНИ</p>',
                            align: 'center',
                            rect: ['1px', '10px', '150px', '25px', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '2px', '7.2%', '42px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2730px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn_skip_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'checkCopy',
                            type: 'image',
                            rect: ['0px', '0px', '177px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/check2.png', '0px', '0px']
                        },
                        {
                            rect: ['5px', '12px', '121px', '27px', 'auto', 'auto'],
                            font: ['Roboto', [20, 'px'], 'rgba(255,255,255,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​ПРОДЪЛЖИ</p>',
                            id: 'Text7Copy3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '90.3%', '42px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'hotspotCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '196px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn_skip_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'check',
                            type: 'image',
                            rect: ['0px', '0px', '177px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/check2.png', '0px', '0px']
                        },
                        {
                            rect: ['5px', '12px', '121px', '27px', 'auto', 'auto'],
                            font: ['Roboto', [20, 'px'], 'rgba(255,255,255,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​ПРОДЪЛЖИ</p>',
                            id: 'Text7Copy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '90.3%', '42px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'hotspotCopy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '196px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn_facebook": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'facebook',
                            rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/facebook.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '50px', 'auto', 'auto'],
                            id: 'hotspot',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn_mail": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'mail',
                            rect: ['0px', '0px', '51px', '50px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mail.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            opacity: '0',
                            rect: ['-128', '-58', '176', '52', 'auto', 'auto'],
                            c: [
                            {
                                id: 'info-dialog-game',
                                rect: ['0px', '0px', '176px', '50px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/info-dialog-game.png', '0px', '0px']
                            },
                            {
                                font: ['Roboto', [24, 'px'], 'rgba(52,73,94,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'center',
                                id: 'Text2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">cj9808@abv.bg</span></p>',
                                rect: ['0px', '2px', '176px', '50px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '50px', 'auto', 'auto'],
                            id: 'hotspotCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '51px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    labels: {
                        "click": 0
                    },
                    data: [
                        [
                            "eid1271",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1274",
                            "opacity",
                            7500,
                            500,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_skype": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'skype',
                            rect: ['0px', '0px', '51px', '50px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/skype.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group2',
                            opacity: '0',
                            rect: ['-125', '-57', '176', '52', 'auto', 'auto'],
                            c: [
                            {
                                id: 'info-dialog-gameCopy',
                                rect: ['0px', '0px', '176px', '50px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/info-dialog-game.png', '0px', '0px']
                            },
                            {
                                font: ['Roboto', [24, 'px'], 'rgba(52,73,94,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'center',
                                id: 'Text2Copy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">martin9808</span></p>',
                                rect: ['0px', '2px', '176px', '50px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '100%', '50px', 'auto', 'auto'],
                            id: 'hotspotCopy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '51px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    labels: {
                        "click": 0
                    },
                    data: [
                        [
                            "eid1277",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Group2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1280",
                            "opacity",
                            7500,
                            500,
                            "linear",
                            "${Group2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_back-page": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Roboto', [25, 'px'], 'rgba(255,255,255,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​назад</p>',
                            rect: ['0px', '0px', '162px', '50px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0.56842', '0.49066']],
                            id: 'hotspotCopy3',
                            symbolName: 'hotspot',
                            rect: ['-61px', '-20px', '285', '70', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '162px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn_logo2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'logo22',
                            rect: ['0px', '-1px', '293px', '38px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logo222.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '293px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "download-btn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'download-button',
                            rect: ['0px', '0px', '177px', '46px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/download-button.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '9px', '130px', '41px', 'auto', 'auto'],
                            font: ['Roboto', [24, 'px'], 'rgba(52,73,94,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">ЗАПИШИ</span></p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '177px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "btn_online": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'online-button',
                            rect: ['-1px', '0px', '219px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/online-button.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '9px', '170px', '46px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​ВИЖ ON-LINE</p>',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Roboto', [24, 'px'], 'rgba(255,255,255,1.00)', '300', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '219px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("certificats-5_edgeActions.js");
})("EDGE-453454929");
