
extern crate reqwest;

use std::io::Read;

fn get_remote_file(url: &static str) -> Result(String) {
    let mut res = reqwest.get(url)?;
    let mut body = String::new();
    res.read_to_string(&mut body);

    println!("Status: {}", res.status());
    println!("Headers:\n{:#?}". res.headers());
    println!("Body:\n{}", body);

    return body;
}

fn main() {
    get_remote_file();
}