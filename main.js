function main(){
    var canvas = document.getElementById("Canvas");
    var gl = canvas.getContext("webgl");

    var leftVertices = [
        // UNTUK MEMBUATNYA MENJADI TERCERMIN COBA PAKAI RUMUS x - 2 * (x + 0.5), dengan cermin di sumbu y = 0.5 (titik tengah)

        //bagian atas
        // segitiga 1 hitam kiri
        0, 0, 0.235, 0.235, 0.196,  
        -0.062, 0.3,  0.235, 0.235, 0.196,
        -0.29, 0.3,  0.235, 0.235, 0.196, 

        //segitiga 2 hitam kanan
        0, 0, 0.235, 0.235, 0.196,  
        -0.29, 0.3,  0.235, 0.235, 0.196, 
        -0.26, 0, 0.235, 0.235, 0.196,

        // sarung penghapus segitiga kiri bawah
        -0.29, 0.33, 0.737, 0.682,0.580,
        -0.26, 0, 0.737, 0.682,0.580,
        -0.6, 0, 0.737, 0.682,0.580,

        //sarung penghapus segitiga atas 
        -0.29, 0.33, 0.737, 0.682,0.580,
        -0.95, 0.33, 0.737, 0.682,0.580,
        -0.6, 0, 0.737, 0.682,0.580,
        
        //sarung penghapus segitiga kanan bawah
        -1, 0, 0.737, 0.682,0.580,
        -0.95, 0.33, 0.737, 0.682,0.580,
        -0.6, 0, 0.737, 0.682,0.580,

        //sarung penghapus bagian bawah
        -1,0, 0.588, 0.549, 0.509,
        -0.6, 0, 0.588, 0.549, 0.509,
        -0.95, -0.2, 0.588, 0.549, 0.509,

        -0.32, -0.2, 0.588, 0.549, 0.509,
        -0.6, 0, 0.588, 0.549, 0.509,
        -0.95, -0.2, 0.588, 0.549, 0.509,

        -0.26, 0, 0.588, 0.549, 0.509,
        -0.6, 0, 0.588, 0.549, 0.509,
        -0.32, -0.2, 0.588, 0.549, 0.509,

         //penghapus bagian bawah
         0, 0, 0, 0, 0,
         -0.081, -0.19, 0, 0, 0,
         -0.26, 0, 0, 0 , 0,
 
         -0.26, 0, 0, 0, 0,
         -0.081, -0.19, 0, 0, 0,
         -0.32, -0.194, 0, 0, 0
    ];

    var rightVertices = [
        //bagian atas
        // segitiga 1 hitam kiri
        0, 0, 0.235, 0.235, 0.196, 
        0.062, 0.3,  0.235, 0.235, 0.196,
        0.29, 0.3,  0.235, 0.235, 0.196, 

        //segitita 2 hitam kanan
        0,0,0.235, 0.235, 0.196,
        0.26, 0, 0.235, 0.235, 0.196,
        0.29, 0.3, 0.235, 0.235, 0.196,

         //sarung penghapus segitiga kiri bawah
         0.29, 0.33, 0.737, 0.682,0.580,
         0.26, 0, 0.737, 0.682,0.580,
         0.6, 0, 0.737, 0.682,0.580,

        // sarung penghapus segitiga atas
        0.29, 0.33, 0.737, 0.682,0.580,
         0.95, 0.33, 0.737, 0.682,0.580,
         0.6, 0, 0.737, 0.682,0.580,

        // sarung penghapus segitiga bawah
         1, 0, 0.737, 0.682,0.580,
         0.95, 0.33, 0.737, 0.682,0.580,
         0.6, 0, 0.737, 0.682,0.580,

        //sarung penghapus bagian bawah
        1, 0, 0.588, 0.549, 0.509,
        0.6, 0, 0.588, 0.549, 0.509,
        0.95, -0.2, 0.588, 0.549, 0.509,

        0.32, -0.2, 0.588, 0.549, 0.509,
        0.6, 0, 0.588, 0.549, 0.509,
        0.95, -0.2, 0.588, 0.549, 0.509,

        0.26, 0, 0.588, 0.549, 0.509,
        0.6, 0, 0.588, 0.549, 0.509,
        0.32, -0.2, 0.588, 0.549, 0.509,

        //penghapus bagian bawah
        0, 0, 0, 0, 0,
        0.081, -0.19, 0, 0, 0,
        0.26, 0, 0, 0 , 0,

        0.26, 0, 0, 0, 0,
        0.081, -0.19, 0, 0, 0,
        0.32, -0.194, 0, 0, 0
    ];

    var vertices = [...leftVertices,...rightVertices]; 

    // Create a linked-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying  vec3 vColor;
        uniform mat4 uTranslate;
        void main(){
            gl_Position = uTranslate * vec4(aPosition, 0.0, 1.0); // Center of the coordinate
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;
    
    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentShaderSource);
    
    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    
    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

     // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    
    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);
    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);
    
    // Teach the computer how to collect
    // the positional values from ARRAY_BUFFER
    // to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var speed = 0.0111;
    var dy = 0;
    // Create a uniform to animate the vertices
    const uTranslate = gl.getUniformLocation(shaderProgram, 'uTranslate');
    
    function render() {
        //control the bouncing range
        if (dy >= 0.65 || dy <= -0.65) speed = -speed;
		dy += speed;
        
        const rightPosition = [
		1.0, 0.0, 0.0, 0.0,
		0.0, 1.0, 0.0, 0.0,
		0.0, 0.0, 1.0, 0.0,
		0, dy, 0.0, 1.0,
	]

	const leftPosition = [
		1.0, 0.0, 0.0, 0.0,
		0.0, 1.0, 0.0, 0.0,
		0.0, 0.0, 1.0, 0.0,
		0, 0.0, 0.0, 1.0,
	]
		
        //coloring canvas
	gl.clearColor(0.7, 0.6, 0.6, 0.8); 
	gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniformMatrix4fv(uTranslate, false, leftPosition);
        gl.drawArrays(gl.TRIANGLES, 0, leftVertices.length/5);

		gl.uniformMatrix4fv(uTranslate, false, rightPosition);
        gl.drawArrays(gl.TRIANGLES, leftVertices.length/5, rightVertices.length/5);
            
        requestAnimationFrame(render);
    }
    render();
}