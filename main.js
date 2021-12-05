function main(){
    var canvas = document.getElementById("Canvas");
    var gl = canvas.getContext("webgl");

    
   // var vertices = [...cube,...rightVertices]; 
   var vertices = [...penghapusKanan, ...cubeLight, ...penghapusKiri];

   var indices = [...indicesKanan, ...indicesCube, ...indicesKiri];

   var vertexBuffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

   // Create a linked-list for storing the indices data
   var indexBuffer = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

   var vertexShaderSource = `
   attribute vec3 aPosition;
   attribute vec3 aColor;
   attribute vec3 aNormal;
   varying vec3 vColor;
   varying vec3 vNormal;
   uniform mat4 uModel;
   uniform mat4 uView;
   uniform mat4 uProjection;
   void main() {
       gl_Position = uProjection * uView * uModel * (vec4(aPosition * 2. / 3., 1.));
       vColor = aColor;
       vNormal = aNormal;
   }
`;

var fragmentShaderSource = `
   precision mediump float;
   varying vec3 vColor;
   varying vec3 vNormal;
   uniform vec3 uLightConstant;        // It represents the light color
   uniform float uAmbientIntensity;    // It represents the light intensity
   uniform vec3 uLightDirection;
   uniform mat3 uNormalModel;
   void main() {
       vec3 ambient = uLightConstant * uAmbientIntensity;
       vec3 normalizedLight = normalize(uLightDirection);  // [2., 0., 0.] becomes a unit vector [1., 0., 0.]
       vec3 normalizedNormal = normalize(uNormalModel * vNormal);
       float cosTheta = dot(normalizedNormal, normalizedLight);
       vec3 diffuse = vec3(0., 0., 0.);
       if (cosTheta > 0.) {
           float diffuseIntensity = cosTheta;
           diffuse = uLightConstant * diffuseIntensity;
       }
       vec3 phong = ambient + diffuse; // + specular;
       gl_FragColor = vec4(phong * vColor, 1.);
   }
`;

    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

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
    //  the positional values from ARRAY_BUFFER
    //  to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
    aPosition, 
    3, 
    gl.FLOAT, 
    false, 
    9 * Float32Array.BYTES_PER_ELEMENT, 
    0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
    aColor, 
    3, 
    gl.FLOAT, 
    false, 
    9 * Float32Array.BYTES_PER_ELEMENT, 
    6 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);
    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(
    aNormal, 
    3, 
    gl.FLOAT, 
    false, 
    9 * Float32Array.BYTES_PER_ELEMENT, 
    3 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aNormal);

    // Define the lighting and shading
    var uAmbientConstant = gl.getUniformLocation(shaderProgram, "uAmbientConstant");
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uAmbientConstant, [1.0, 1.0, 1.0]);   // WHITE light
    gl.uniform1f(uAmbientIntensity, 0.311) // light intensity: 40%

    //Connect the uniform transformation matrices
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");

    // Set the projection matrix in the vertex shader
    var projection = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        projection,
        Math.PI / 3,
        1,
        0.5,
        10
    );
    gl.uniformMatrix4fv(uProjection, false, projection);

    // Set the view matrix in the vertex shader
    var view = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(
        view,
        [0, 0, 2],
        [0, 0, 0],
        [0, 1, 0]
    );
    gl.uniformMatrix4fv(uView, false, view);

    var freeze = false;
    // Apply some interaction using mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick, false);

    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }
    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown, false);
    document.addEventListener("keyup", onKeyup, false);


    var speed = [2/600, 2/600, 0];
    var change = [0, 0, 0];

    function render() {

        if (!freeze) { // If it is not freezing, then animate the rectangle
            if (change[0] >= 0.5 || change[0] <= -0.5) speed[0] = -speed[0];
            if (change[1] >= 0.5 || change[1] <= -0.5) speed[1] = -speed[1];
            change[0] = change[0] + speed[0];
            change[1] = change[1] + speed[1];
            // Init the model matrix
            var model = glMatrix.mat4.create();
            // Define a rotation matrix about x axis and store it to the model matrix
             glMatrix.mat4.rotate(model, model, change[0], [1, 0, 0]);
            // // Define a rotation matrix about y axis and store it to the model matrix
             glMatrix.mat4.rotate(model, model, change[1], [0, 1, 0]);
            // Define a translation matrix and store it to the model matrix
             glMatrix.mat4.translate(model, model, change);
            // Set the model matrix in the vertex shader
            gl.uniformMatrix4fv(uModel, false, model);
            // Reset the frame buffer
            gl.enable(gl.DEPTH_TEST);
            gl.clearColor(0.1, 0.1, 0.1, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            // gl.drawArrays(primitive, offset, nVertex);
            gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
            
        }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}