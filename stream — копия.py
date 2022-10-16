#Import necessary libraries
from flask import Flask, render_template, Response, request
from pipeline_interface import ImagePipeline


slider_v = 0
import cv2
#Initialize the Flask app
app = Flask(__name__)
camera = cv2.VideoCapture("src/conv.mp4")
pipe = ImagePipeline("./modelBEST.pt")


def gen_frames():  
    while True:
        
        success, frame = camera.read()  # read the camera frame
        img, data_json = pipe(frame, 1)
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', img)
            img = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + img + b'\r\n')  # concat frame one by one and show result

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/slider_update', methods = ['POST', 'GET'])
def slider():
    received_data = request.data
    slider_v = int(received_data)
    print(received_data)
    return received_data

if __name__ == "__main__":
    slider_v = 0
    app.run(debug=True)