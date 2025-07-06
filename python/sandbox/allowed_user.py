def allowed_users(user):
    user_allowed = ["Jacob", "Ron", "lil Pip"]
    # List comprehension
    allowed_lower = [name.lower() for name in user_allowed] 
    # print("lower:", allowed_lower)
    
    if user.lower() in allowed_lower:
        return "Access Granted"
    else:
        return "Stranger danger!"
    
print(allowed_users("lil Pip"))
print(allowed_users("lil Pep"))
print(allowed_users("Ron"))
print(allowed_users("ron"))