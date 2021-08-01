import json
import boto3

dynamodb = boto3.client('dynamodb')

# Activate_1 dynamoDB에서 모든 데이터를 가져오는 함수
def lambda_handler(event, context):
    items = []
    response = dynamodb.scan(
        TableName='Activate_1'
    )
    for item in response['Items']:
        items.append({
            'phoneNumber': item['phoneNumber']['S'],
            'time': item['time']['S'],
            'age': item['age']['N'],
            'gender': item['gender']['S'],
            'latitude': item['latitude']['S'],
            'longitude': item['longitude']['S'],
        })
    return items