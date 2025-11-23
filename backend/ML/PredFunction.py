import os
from huggingface_hub import InferenceClient
from dotenv import load_dotenv

load_dotenv()

def Text_Predict(Text_here):

    client = InferenceClient(
        provider="hf-inference",
        api_key=os.getenv('HF_TOKEN'),
    )

    result = client.text_classification(
        Text_here,
        model="nlptown/bert-base-multilingual-uncased-sentiment",
    )

    # print(result)

    # 1 ou 2 = negatif
    # 3 = neutre
    # 4 ou 5 = positif

    # [
    #     TextClassificationOutputElement(label='5 stars', score=0.6376072764396667),
    #     TextClassificationOutputElement(label='4 stars', score=0.16031774878501892), 
    #     TextClassificationOutputElement(label='3 stars', score=0.09039870649576187), 
    #     TextClassificationOutputElement(label='1 star', score=0.07439592480659485), 
    #     TextClassificationOutputElement(label='2 stars', score=0.03728034347295761)
    # ]

    Class_Names = {"negatif": (1, 2), "neutre": (3,), "positif": (4, 5)}

    Rate = int(result[0].label.split(' ')[0])  

    for key, values in Class_Names.items():
        if Rate in values:
            Predict = key

    return Predict


if __name__ == '__main__':
    My_Text = input(str(' Entry Your Text Here : '))
    Pred = Text_Predict(My_Text)
    print(Pred)