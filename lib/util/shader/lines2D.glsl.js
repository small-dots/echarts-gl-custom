export default "@export ecgl.lines2D.vertex\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\n\nattribute vec2 position: POSITION;\nattribute vec4 a_Color : COLOR;\nvarying vec4 v_Color;\n\n#ifdef POSITIONTEXTURE_ENABLED\nuniform sampler2D positionTexture;\n#endif\n\nvoid main()\n{\n gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);\n\n v_Color = a_Color;\n}\n\n@end\n\n@export ecgl.lines2D.fragment\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\n\nvarying vec4 v_Color;\n\nvoid main()\n{\n gl_FragColor = color * v_Color;\n}\n@end\n\n\n@export ecgl.meshLines2D.vertex\n\nattribute vec2 position: POSITION;\nattribute vec2 normal;\nattribute float offset;\nattribute vec4 a_Color : COLOR;\n\nuniform mat4 worldViewProjection : WORLDVIEWPROJECTION;\nuniform vec4 viewport : VIEWPORT;\n\nvarying vec4 v_Color;\nvarying float v_Miter;\n\nvoid main()\n{\n vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);\n gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);\n\n p2.xy /= p2.w;\n gl_Position.xy /= gl_Position.w;\n\n vec2 N = normalize(p2.xy - gl_Position.xy);\n gl_Position.xy += N * offset / viewport.zw * 2.0;\n\n gl_Position.xy *= gl_Position.w;\n\n v_Color = a_Color;\n}\n@end\n\n\n@export ecgl.meshLines2D.fragment\n\nuniform vec4 color : [1.0, 1.0, 1.0, 1.0];\n\nvarying vec4 v_Color;\nvarying float v_Miter;\n\nvoid main()\n{\n gl_FragColor = color * v_Color;\n}\n\n@end";