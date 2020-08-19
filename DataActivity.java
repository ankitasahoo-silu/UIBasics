package com.example.intents;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class DataActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_data);

        final TextView mTvUsername = findViewById(R.id.tv_user_name);
        TextView  mTvPassword = findViewById(R.id.tv_password);
        EditText mEtUsernameData = findViewById(R.id.et_user_name_data);

        Button mBtnUpdate = findViewById(R.id.btn_update);
        Button mBtnCancel = findViewById(R.id.btn_cancel);

        Bundle intentData = getIntent().getExtras();

        if (intentData != null){
            String username = intentData.getString("USERNAME");
            String password = intentData.getString("PASSWORD");
            boolean isLogIn = intentData.getBoolean("ISLOGEDIN");

            mTvUsername.setText(username);
            mTvPassword.setText(password);
            mEtUsernameData.setText(username);
        }

        mBtnCancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                setResult(Activity.RESULT_CANCELED);
                finish();
            }
        });

        mBtnUpdate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String editedUserName = mTvUsername.getText().toString();
                Intent returnIntent = new Intent();
                returnIntent.putExtra("EDITED_USERNAME", editedUserName);
                setResult(Activity.RESULT_OK, returnIntent);
                finish();
            }
        });
    }
}