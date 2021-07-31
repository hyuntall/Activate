import json
import boto3
import datetime

dynamodb = boto3.client('dynamodb')
# Activate_1 dynamoDB에 사용자 및 위치 정보를 전송하는 함수
def lambda_handler(event, context):
    response = dynamodb.put_item(
        TableName = 'Activate_1',
        Item = {
            'phoneNumber' : {"S": event['phoneNumber']},
            'time' : {"S": str(get_timestamp())},
            'age' : {"N": event['age']},
            'gender' : {"S": event['gender']},
            'latitude' : {"S": event['latitude']},
            'longitude' : {"S": event['longitude']}
        }
    )
    return response

def get_now_time():
    #현재 시간 datetime 형태로 반환
    return datetime.datetime.now()

def get_timestamp():
    #현재 시간을 timestamp로 반환
    return get_now_time().timestamp()